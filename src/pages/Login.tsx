import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router-dom";
import { useAuthStore } from "@/stores/authStore";
import { Button } from "@/components/ui/button";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Loader2 } from "lucide-react";

const formSchema = z.object({
    username: z.string().min(1, "ກະລຸນາປ້ອນຊື່ຜູ້ໃຊ້"),
});

export default function LoginPage() {
    const navigate = useNavigate();
    const { login, isLoading, error } = useAuthStore();
    const [localError, setLocalError] = useState<string | null>(null);

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            username: "",
        },
    });

    async function onSubmit(values: z.infer<typeof formSchema>) {
        setLocalError(null);
        try {
            await login(values.username);
            const user = useAuthStore.getState().user;
            if (user?.role === "teacher") {
                navigate("/teacher");
            } else {
                navigate("/student");
            }
        } catch (err) {
            // Error handling is done in store, but we catch here to prevent unhandled rejection
            console.error(err);
        }
    }

    return (
        <div className="flex items-center justify-center min-h-[calc(100vh-200px)]">
            <Card className="w-full max-w-md">
                <CardHeader>
                    <CardTitle className="text-2xl text-center">
                        ເຂົ້າສູ່ລະບົບ JO-Quiz
                    </CardTitle>
                    <CardDescription className="text-center">
                        ປ້ອນຊື່ຜູ້ໃຊ້ເພື່ອທົດສອບ (teacher / student)
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <Form {...form}>
                        <form
                            onSubmit={form.handleSubmit(onSubmit)}
                            className="space-y-6"
                        >
                            <FormField
                                control={form.control}
                                name="username"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>ຊື່ຜູ້ໃຊ້</FormLabel>
                                        <FormControl>
                                            <Input
                                                placeholder="teacher"
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            {(error || localError) && (
                                <div className="text-sm font-medium text-destructive">
                                    {error || localError}
                                </div>
                            )}

                            <Button
                                type="submit"
                                className="w-full"
                                disabled={isLoading}
                            >
                                {isLoading && (
                                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                )}
                                ເຂົ້າສູ່ລະບົບ
                            </Button>

                            <div className="mt-4 text-center text-sm text-muted-foreground">
                                <p>Mock Credentials:</p>
                                <ul className="mt-1 list-disc list-inside">
                                    <li>
                                        Teacher: <code>teacher</code>
                                    </li>
                                    <li>
                                        Student: <code>student</code>
                                    </li>
                                </ul>
                            </div>
                        </form>
                    </Form>
                </CardContent>
            </Card>
        </div>
    );
}
