import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { Exam, ExamSession } from "@/types/exam";
import { MOCK_EXAM } from "@/services/mockData";

interface ExamState extends ExamSession {
    currentExam: Exam | null;
    currentQuestionIndex: number;

    startExam: (studentName: string) => void;
    setAnswer: (questionId: string, choiceId: string) => void;
    nextQuestion: () => void;
    prevQuestion: () => void;
    finishExam: () => void;
    startReview: () => void;
    resetExam: () => void;
}

export const useExamStore = create<ExamState>()(
    persist(
        (set, get) => ({
            studentName: "",
            answers: {},
            score: 0,
            status: "not-started", // Initial status remains "not-started"
            currentExam: MOCK_EXAM, // In real app, this would be fetched
            currentQuestionIndex: 0,

            startExam: (studentName: string) => {
                set({
                    studentName,
                    status: "in-progress",
                    answers: {},
                    score: 0,
                    currentQuestionIndex: 0,
                });
            },

            setAnswer: (questionId: string, choiceId: string) => {
                set((state) => ({
                    answers: { ...state.answers, [questionId]: choiceId },
                }));
            },

            nextQuestion: () => {
                set((state) => ({
                    currentQuestionIndex: Math.min(
                        state.currentQuestionIndex + 1,
                        (state.currentExam?.questions.length || 0) - 1
                    ),
                }));
            },

            prevQuestion: () => {
                set((state) => ({
                    currentQuestionIndex: Math.max(state.currentQuestionIndex - 1, 0),
                }));
            },

            finishExam: () => {
                const state = get();
                if (!state.currentExam) return;

                let score = 0;
                state.currentExam.questions.forEach((q) => {
                    const userAnswer = state.answers[q.id];
                    if (q.type === "fill-blank") {
                        if (
                            userAnswer?.trim() ===
                            q.correctAnswerText?.trim()
                        ) {
                            score++;
                        }
                    } else {
                        if (userAnswer === q.correctChoiceId) {
                            score++;
                        }
                    }
                });

                set({ status: "completed", score });
            },

            startReview: () => {
                set({ status: "review", currentQuestionIndex: 0 });
            },

            resetExam: () => {
                set({
                    studentName: "",
                    answers: {},
                    score: 0,
                    status: "not-started",
                    currentQuestionIndex: 0,
                });
            },
        }),
        {
            name: "exam-storage",
        }
    )
);
