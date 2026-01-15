import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useExamStore } from "@/stores/examStore";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Progress } from "@/components/ui/progress";
import { Label } from "@/components/ui/label";

const nameSchema = z.object({
    firstName: z.string().min(2, "ກະລຸນາປ້ອນຊື່"),
    lastName: z.string().min(2, "ກະລຸນາປ້ອນນາມສະກຸນ"),
});

export default function StudentDashboard() {
    const {
        status,
        currentExam,
        currentQuestionIndex,
        studentName,
        answers,
        score,
        history,
        startExam,
        setAnswer,
        nextQuestion,
        prevQuestion,
        finishExam,
        resetExam,
    } = useExamStore();

    const nameForm = useForm<z.infer<typeof nameSchema>>({
        resolver: zodResolver(nameSchema),
        defaultValues: { firstName: "", lastName: "" },
    });

    // Redirect if exam finished (optional, stay on result page)

    const handleStart = (values: z.infer<typeof nameSchema>) => {
        startExam(`${values.firstName} ${values.lastName}`);
    };

    const handleLogout = () => {
        // logout(); // No auth for now
        resetExam();
        // navigate("/login");
        window.location.reload(); // Simple reload to reset everything
    };

    if (!currentExam) return <div>Loading Exam...</div>;

    // 1. State: Input Name
    if (status === "not-started") {
        return (
            <div className="flex items-center justify-center min-h-[calc(100vh-100px)]">
                <Card className="w-full max-w-md">
                    <CardHeader>
                        <CardTitle>ຍິນດີຕ້ອນຮັບສູ່ການສອບເສັງ</CardTitle>
                        <CardDescription>
                            ກະລຸນາປ້ອນຂໍ້ມູນສ່ວນຕົວຂອງທ່ານ
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <Form {...nameForm}>
                            <form
                                onSubmit={nameForm.handleSubmit(handleStart)}
                                className="space-y-4"
                            >
                                <div className="grid grid-cols-2 gap-4">
                                    <FormField
                                        control={nameForm.control}
                                        name="firstName"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>ຊື່</FormLabel>
                                                <FormControl>
                                                    <Input
                                                        placeholder="ສົມຊາຍ"
                                                        {...field}
                                                    />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                    <FormField
                                        control={nameForm.control}
                                        name="lastName"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>ນາມສະກຸນ</FormLabel>
                                                <FormControl>
                                                    <Input
                                                        placeholder="ໃຈດີ"
                                                        {...field}
                                                    />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                </div>
                                <Button type="submit" className="w-full">
                                    ເລີ່ມສອບເສັງ
                                </Button>
                            </form>
                        </Form>
                    </CardContent>
                    <CardFooter className="flex-col gap-2 justify-center">
                        <Button variant="link" onClick={handleLogout}>
                            ອອກຈາກລະບົບ
                        </Button>
                        <Button
                            variant="ghost"
                            size="sm"
                            className="text-muted-foreground"
                            onClick={() => (window.location.href = "/teacher")}
                        >
                            ໄປໜ້າອາຈານ (Teacher) 👨‍🏫
                        </Button>
                    </CardFooter>
                </Card>
            </div>
        );
    }

    // 2. State: Exam Interface
    if (status === "in-progress") {
        const question = currentExam.questions[currentQuestionIndex];
        const totalQuestions = currentExam.questions.length;
        const progress = ((currentQuestionIndex + 1) / totalQuestions) * 100;
        const isLastQuestion = currentQuestionIndex === totalQuestions - 1;

        return (
            <div className="container max-w-2xl mx-auto py-8 space-y-6">
                <div className="flex justify-between items-center">
                    <div>
                        <h2 className="text-xl font-bold">{studentName}</h2>
                        <p className="text-sm text-muted-foreground">
                            {currentExam.title}
                        </p>
                    </div>
                    <div className="text-right">
                        <span className="font-mono text-xl">
                            {currentQuestionIndex + 1}
                        </span>
                        <span className="text-muted-foreground">
                            {" "}
                            / {totalQuestions}
                        </span>
                    </div>
                </div>

                <Progress value={progress} className="h-2" />

                <Card>
                    <CardHeader>
                        <CardTitle className="text-lg font-medium leading-relaxed">
                            {question.text}
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        {question.type === "fill-blank" ? (
                            <div className="space-y-3">
                                <Label>ຄຳຕອບຂອງທ່ານ:</Label>
                                <Input
                                    value={answers[question.id] || ""}
                                    onChange={(e) =>
                                        setAnswer(question.id, e.target.value)
                                    }
                                    placeholder="ພິມຄຳຕອບຢູ່ທີ່ນີ້..."
                                />
                            </div>
                        ) : (
                            <RadioGroup
                                value={answers[question.id] || ""}
                                onValueChange={(value) =>
                                    setAnswer(question.id, value)
                                }
                                className="space-y-3"
                            >
                                {question.choices?.map((choice) => (
                                    <div
                                        key={choice.id}
                                        className="flex items-center space-x-2 border p-4 rounded-md hover:bg-accent cursor-pointer transition-colors"
                                        onClick={() =>
                                            setAnswer(question.id, choice.id)
                                        }
                                    >
                                        <RadioGroupItem
                                            value={choice.id}
                                            id={choice.id}
                                        />
                                        <Label
                                            htmlFor={choice.id}
                                            className="flex-1 cursor-pointer"
                                        >
                                            {choice.text}
                                        </Label>
                                    </div>
                                ))}
                            </RadioGroup>
                        )}
                    </CardContent>
                    <CardFooter className="flex justify-between">
                        <Button
                            variant="outline"
                            onClick={prevQuestion}
                            disabled={currentQuestionIndex === 0}
                        >
                            ກັບຄືນ
                        </Button>

                        {isLastQuestion ? (
                            <Button
                                onClick={finishExam}
                                disabled={!answers[question.id]}
                            >
                                ສົ່ງຄຳຕອບ
                            </Button>
                        ) : (
                            <Button
                                onClick={nextQuestion}
                                disabled={!answers[question.id]}
                            >
                                ຂໍ້ຕໍ່ໄປ
                            </Button>
                        )}
                    </CardFooter>
                </Card>
            </div>
        );
    }

    // 3. State: Result
    if (status === "completed") {
        const totalQuestions = currentExam.questions.length;
        const percentage = Math.round((score / totalQuestions) * 100);

        // Calculate attempt count for this student
        const attemptCount = history.filter(
            (h) => h.studentName === studentName
        ).length;

        return (
            <div className="flex items-center justify-center min-h-[calc(100vh-100px)]">
                <Card className="w-full max-w-md text-center">
                    <CardHeader>
                        <CardTitle className="text-3xl">
                            ຜົນການສອບເສັງ
                        </CardTitle>
                        <CardDescription>{studentName}</CardDescription>
                        <p className="text-sm text-muted-foreground mt-1">
                            ສອບເສັງຄັ້ງທີ {attemptCount}
                        </p>
                    </CardHeader>
                    <CardContent className="space-y-6">
                        <div className="text-6xl font-extrabold text-primary">
                            {score} / {totalQuestions}
                        </div>
                        <div className="space-y-2">
                            <Progress value={percentage} className="h-4" />
                            <p className="text-sm text-muted-foreground">
                                {percentage}% ຖືກຕ້ອງ
                            </p>
                        </div>
                        <p className="text-lg">
                            {percentage >= 50
                                ? "ຍິນດີນຳ! ທ່ານສອບເສັງຜ່ານ 🎉"
                                : "ເສຍໃຈນຳ! ທ່ານສອບເສັງຕົກ 😢"}
                        </p>
                    </CardContent>
                    <CardFooter className="flex flex-col gap-2">
                        <Button
                            onClick={() =>
                                useExamStore.getState().startReview()
                            }
                            variant="secondary"
                            className="w-full"
                        >
                            ເບິ່ງສະເລີຍ
                        </Button>
                        <Button onClick={resetExam} className="w-full">
                            ສອບເສັງໃໝ່
                        </Button>
                        <Button
                            variant="outline"
                            onClick={handleLogout}
                            className="w-full"
                        >
                            ອອກຈາກລະບົບ
                        </Button>
                    </CardFooter>
                </Card>
            </div>
        );
    }

    // 4. State: Review
    if (status === "review") {
        const question = currentExam.questions[currentQuestionIndex];
        const totalQuestions = currentExam.questions.length;
        const isLastQuestion = currentQuestionIndex === totalQuestions - 1;
        const userAnswer = answers[question.id];
        let isCorrect = false;

        if (question.type === "fill-blank") {
            isCorrect =
                userAnswer?.trim() === question.correctAnswerText?.trim();
        } else {
            isCorrect = userAnswer === question.correctChoiceId;
        }

        return (
            <div className="container max-w-2xl mx-auto py-8 space-y-6">
                <div className="flex justify-between items-center">
                    <h2 className="text-xl font-bold">ສະເລີຍຄຳຕອບ</h2>
                    <div className="text-right">
                        <span className="font-mono text-xl">
                            {currentQuestionIndex + 1}
                        </span>
                        <span className="text-muted-foreground">
                            {" "}
                            / {totalQuestions}
                        </span>
                    </div>
                </div>

                <Card
                    className={
                        isCorrect ? "border-green-500" : "border-red-500"
                    }
                >
                    <CardHeader>
                        <CardTitle className="text-lg font-medium leading-relaxed">
                            {question.text}
                        </CardTitle>
                        <CardDescription>
                            {isCorrect ? (
                                <span className="text-green-600 font-bold">
                                    ✓ ຕອບຖືກ
                                </span>
                            ) : (
                                <span className="text-red-600 font-bold">
                                    ✗ ຕອບຜິດ
                                </span>
                            )}
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-3">
                        {question.type === "fill-blank" ? (
                            <div className="space-y-4">
                                <div className="p-4 rounded-md border bg-muted/50">
                                    <Label className="text-muted-foreground">
                                        ຄຳຕອບຂອງທ່ານ:
                                    </Label>
                                    <p
                                        className={`text-lg font-medium ${
                                            isCorrect
                                                ? "text-green-600"
                                                : "text-red-600"
                                        }`}
                                    >
                                        {userAnswer || "(ບໍ່ໄດ້ຕອບ)"}
                                    </p>
                                </div>
                                {!isCorrect && (
                                    <div className="p-4 rounded-md border bg-green-50 border-green-200">
                                        <Label className="text-green-800">
                                            ຄຳຕອບທີ່ຖືກຕ້ອງ:
                                        </Label>
                                        <p className="text-lg font-bold text-green-700">
                                            {question.correctAnswerText}
                                        </p>
                                    </div>
                                )}
                            </div>
                        ) : (
                            question.choices?.map((choice) => {
                                const isChoiceCorrect =
                                    choice.id === question.correctChoiceId;
                                const isChoiceSelected =
                                    choice.id === userAnswer;

                                let style =
                                    "border p-4 rounded-md flex items-center justify-between ";
                                if (isChoiceCorrect)
                                    style +=
                                        "bg-green-100 border-green-500 text-green-900";
                                else if (isChoiceSelected && !isChoiceCorrect)
                                    style +=
                                        "bg-red-100 border-red-500 text-red-900";
                                else style += "opacity-60";

                                return (
                                    <div key={choice.id} className={style}>
                                        <span>{choice.text}</span>
                                        {isChoiceCorrect && (
                                            <span className="font-bold text-sm">
                                                ຄຳຕອບທີ່ຖືກຕ້ອງ
                                            </span>
                                        )}
                                        {isChoiceSelected &&
                                            !isChoiceCorrect && (
                                                <span className="font-bold text-sm">
                                                    ຄຳຕອບຂອງທ່ານ
                                                </span>
                                            )}
                                    </div>
                                );
                            })
                        )}
                    </CardContent>
                    <CardFooter className="flex justify-between">
                        <Button
                            variant="outline"
                            onClick={prevQuestion}
                            disabled={currentQuestionIndex === 0}
                        >
                            ກັບຄືນ
                        </Button>
                        {isLastQuestion ? (
                            <Button onClick={resetExam}>ຈົບການຣີວິວ</Button>
                        ) : (
                            <Button onClick={nextQuestion}>ຂໍ້ຕໍ່ໄປ</Button>
                        )}
                    </CardFooter>
                </Card>
            </div>
        );
    }

    return null;
}
