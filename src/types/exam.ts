export type QuestionType = "multiple-choice" | "true-false" | "fill-blank";

export interface Question {
    id: string;
    text: string;
    type: QuestionType;
    choices?: { id: string; text: string }[]; // Optional for fill-blank
    correctChoiceId?: string; // For multiple-choice & true-false
    correctAnswerText?: string; // For fill-blank
}

export interface Exam {
    id: string;
    title: string;
    questions: Question[];
}

export interface ExamSession {
    studentName: string;
    answers: Record<string, string>; // questionId -> choiceId
    score: number;
    status: "not-started" | "in-progress" | "completed" | "review";
}
