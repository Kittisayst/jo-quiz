import { useExamStore } from "@/stores/examStore";
import { MOCK_EXAM } from "@/services/mockData";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";

export default function TeacherDashboard() {
    const { history } = useExamStore();

    // Group history by student name
    const students = Array.from(new Set(history.map((h) => h.studentName)));

    return (
        <div className="container mx-auto py-8 space-y-8">
            <div className="flex justify-between items-center">
                <div>
                    <h1 className="text-3xl font-bold">Teacher Dashboard</h1>
                    <p className="text-muted-foreground">
                        ຕິດຕາມຜົນການສອບເສັງຂອງນັກຮຽນ
                    </p>
                </div>
                <div className="text-right">
                    <p className="font-bold text-xl">{history.length}</p>
                    <p className="text-sm text-muted-foreground">
                        ຈຳນວນສອບເສັງທັງໝົດ
                    </p>
                </div>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {students.map((student) => {
                    const studentHistory = history.filter(
                        (h) => h.studentName === student
                    );
                    const lastAttempt =
                        studentHistory[studentHistory.length - 1];

                    return (
                        <Card
                            key={student}
                            className="hover:shadow-md transition-shadow"
                        >
                            <CardHeader className="pb-2">
                                <CardTitle>{student}</CardTitle>
                                <CardDescription>
                                    ສອບເສັງໄປແລ້ວ {studentHistory.length} ຄັ້ງ
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="space-y-4">
                                    <div className="flex justify-between text-sm">
                                        <span className="text-muted-foreground">
                                            ຄະແນນລ່າສຸດ:
                                        </span>
                                        <span className="font-bold">
                                            {lastAttempt.score} /{" "}
                                            {lastAttempt.totalQuestions}
                                        </span>
                                    </div>

                                    <div className="border-t pt-2">
                                        <p className="text-xs text-muted-foreground mb-2">
                                            ປະຫວັດການສອບເສັງ:
                                        </p>
                                        <ScrollArea className="h-[120px]">
                                            <ul className="space-y-2">
                                                {studentHistory.map(
                                                    (attempt, index) => (
                                                        <li
                                                            key={index}
                                                            className="flex justify-between items-center text-sm p-2 bg-muted/50 rounded-md"
                                                        >
                                                            <span>
                                                                ຄັ້ງທີ{" "}
                                                                {index + 1}
                                                            </span>
                                                            <div className="flex items-center gap-2">
                                                                <span
                                                                    className={
                                                                        attempt.score >=
                                                                        attempt.totalQuestions /
                                                                            2
                                                                            ? "text-green-600 font-bold"
                                                                            : "text-red-600 font-bold"
                                                                    }
                                                                >
                                                                    {
                                                                        attempt.score
                                                                    }
                                                                </span>
                                                                <Dialog>
                                                                    <DialogTrigger
                                                                        asChild
                                                                    >
                                                                        <Button
                                                                            variant="ghost"
                                                                            size="sm"
                                                                            className="h-6 w-6 p-0"
                                                                        >
                                                                            🔍
                                                                        </Button>
                                                                    </DialogTrigger>
                                                                    <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
                                                                        <DialogHeader>
                                                                            <DialogTitle>
                                                                                ລາຍລະອຽດການສອບເສັງ
                                                                                -{" "}
                                                                                {
                                                                                    attempt.studentName
                                                                                }{" "}
                                                                                (ຄັ້ງທີ{" "}
                                                                                {index +
                                                                                    1}

                                                                                )
                                                                            </DialogTitle>
                                                                            <DialogDescription>
                                                                                ວັນທີ:{" "}
                                                                                {new Date(
                                                                                    attempt.timestamp
                                                                                ).toLocaleString(
                                                                                    "lo-LA"
                                                                                )}{" "}
                                                                                |
                                                                                ຄະແນນ:{" "}
                                                                                {
                                                                                    attempt.score
                                                                                }

                                                                                /
                                                                                {
                                                                                    attempt.totalQuestions
                                                                                }
                                                                            </DialogDescription>
                                                                        </DialogHeader>
                                                                        <div className="space-y-6 mt-4">
                                                                            {MOCK_EXAM.questions.map(
                                                                                (
                                                                                    q,
                                                                                    qIndex
                                                                                ) => {
                                                                                    const userAnswer =
                                                                                        (attempt.answers ||
                                                                                            {})[
                                                                                            q
                                                                                                .id
                                                                                        ];
                                                                                    let isCorrect =
                                                                                        false;
                                                                                    let correctText =
                                                                                        "";

                                                                                    if (
                                                                                        q.type ===
                                                                                        "fill-blank"
                                                                                    ) {
                                                                                        isCorrect =
                                                                                            userAnswer?.trim() ===
                                                                                            q.correctAnswerText?.trim();
                                                                                        correctText =
                                                                                            q.correctAnswerText ||
                                                                                            "";
                                                                                    } else {
                                                                                        isCorrect =
                                                                                            userAnswer ===
                                                                                            q.correctChoiceId;
                                                                                        const correctChoice =
                                                                                            q.choices?.find(
                                                                                                (
                                                                                                    c
                                                                                                ) =>
                                                                                                    c.id ===
                                                                                                    q.correctChoiceId
                                                                                            );
                                                                                        correctText =
                                                                                            correctChoice?.text ||
                                                                                            "";
                                                                                    }

                                                                                    // Find text for user answer (if choice)
                                                                                    let userText =
                                                                                        userAnswer;
                                                                                    if (
                                                                                        q.type !==
                                                                                            "fill-blank" &&
                                                                                        q.choices
                                                                                    ) {
                                                                                        const userChoice =
                                                                                            q.choices.find(
                                                                                                (
                                                                                                    c
                                                                                                ) =>
                                                                                                    c.id ===
                                                                                                    userAnswer
                                                                                            );
                                                                                        userText =
                                                                                            userChoice?.text ||
                                                                                            userAnswer;
                                                                                    }

                                                                                    return (
                                                                                        <div
                                                                                            key={
                                                                                                q.id
                                                                                            }
                                                                                            className={`p-4 rounded-lg border ${
                                                                                                isCorrect
                                                                                                    ? "bg-green-50 border-green-200"
                                                                                                    : "bg-red-50 border-red-200"
                                                                                            }`}
                                                                                        >
                                                                                            <p className="font-medium mb-2">
                                                                                                {qIndex +
                                                                                                    1}

                                                                                                .{" "}
                                                                                                {
                                                                                                    q.text
                                                                                                }
                                                                                            </p>
                                                                                            <div className="grid grid-cols-2 gap-4 text-sm">
                                                                                                <div>
                                                                                                    <p className="text-muted-foreground">
                                                                                                        ຄຳຕອບນັກຮຽນ:
                                                                                                    </p>
                                                                                                    <p
                                                                                                        className={
                                                                                                            isCorrect
                                                                                                                ? "text-green-700 font-semibold"
                                                                                                                : "text-red-700 font-semibold"
                                                                                                        }
                                                                                                    >
                                                                                                        {userText ||
                                                                                                            "(ບໍ່ໄດ້ຕອບ)"}
                                                                                                    </p>
                                                                                                </div>
                                                                                                {!isCorrect && (
                                                                                                    <div>
                                                                                                        <p className="text-muted-foreground">
                                                                                                            ຄຳຕອບທີ່ຖືກ:
                                                                                                        </p>
                                                                                                        <p className="text-green-700 font-semibold">
                                                                                                            {
                                                                                                                correctText
                                                                                                            }
                                                                                                        </p>
                                                                                                    </div>
                                                                                                )}
                                                                                            </div>
                                                                                        </div>
                                                                                    );
                                                                                }
                                                                            )}
                                                                        </div>
                                                                    </DialogContent>
                                                                </Dialog>
                                                            </div>
                                                        </li>
                                                    )
                                                )}
                                            </ul>
                                        </ScrollArea>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    );
                })}
            </div>
            {students.length === 0 && (
                <div className="text-center py-12 text-muted-foreground">
                    ຍັງບໍ່ມີຂໍ້ມູນການສອບເສັງ
                </div>
            )}
        </div>
    );
}
