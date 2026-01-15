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
            history: [],
            status: "not-started", // Initial status remains "not-started"
            currentExam: MOCK_EXAM, // In real app, this would be fetched
            currentQuestionIndex: 0,

            startExam: (studentName: string) => {
                // Fisher-Yates Shuffle Utility
                const shuffle = <T>(array: T[]): T[] => {
                    const newArray = [...array];
                    for (let i = newArray.length - 1; i > 0; i--) {
                        const j = Math.floor(Math.random() * (i + 1));
                        [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
                    }
                    return newArray;
                };

                // Clone and shuffle questions
                const shuffledQuestions = shuffle(MOCK_EXAM.questions).map((q) => {
                    // Also shuffle choices if they exist (only for multiple-choice, let true/false stay sorted or not?)
                    // Let's shuffle multiple-choice choices only to keep True/False natural (True/False usually standard order)
                    // But user request implies preventing copying, so shuffling multiple choice options is good.
                    if (q.type === "multiple-choice" && q.choices) {
                        return { ...q, choices: shuffle(q.choices) };
                    }
                    return q;
                });

                const shuffledExam = { ...MOCK_EXAM, questions: shuffledQuestions };

                set({
                    studentName,
                    status: "in-progress",
                    answers: {},
                    score: 0,
                    currentQuestionIndex: 0,
                    currentExam: shuffledExam, // Use the shuffled version
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

                const newResult = {
                    examId: state.currentExam.id,
                    studentName: state.studentName,
                    score,
                    totalQuestions: state.currentExam.questions.length,
                    timestamp: new Date().toISOString(),
                    answers: state.answers,
                };

                set((state) => ({
                    status: "completed",
                    score,
                    history: [...state.history, newResult],
                }));
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
