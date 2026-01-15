import type { User } from "@/types/user";
import type { Exam } from "@/types/exam";

export const MOCK_USERS: User[] = [
    {
        id: "teacher-1",
        name: "ອາຈານ ໃຈດີ",
        username: "teacher",
        role: "teacher",
    },
    {
        id: "student-1",
        name: "ນັກຮຽນ ຕັ້ງໃຈ",
        username: "student",
        role: "student",
    },
];

export const MOCK_EXAM: Exam = {
    id: "exam-1",
    title: "ແບບທົດສອບຄວາມຮູ້ທົ່ວໄປ",
    questions: [
        // 1. Multiple Choice (5 Questions)
        {
            id: "q1",
            text: "ນະຄອນຫຼວງຂອງປະເທດລາວ ແມ່ນແຂວງໃດ?",
            type: "multiple-choice",
            choices: [
                { id: "c1", text: "ຫຼວງພະບາງ" },
                { id: "c2", text: "ວຽງຈັນ" },
                { id: "c3", text: "ຈຳປາສັກ" },
                { id: "c4", text: "ສະຫວັນນະເຂດ" },
            ],
            correctChoiceId: "c2",
        },
        {
            id: "q2",
            text: "ແມ່ນ້ຳຂອງ ໄຫຼຜ່ານປະເທດລາວ ເປັນໄລຍະທາງເທົ່າໃດ?",
            type: "multiple-choice",
            choices: [
                { id: "c1", text: "1,835 ກິໂລແມັດ" },
                { id: "c2", text: "1,500 ກິໂລແມັດ" },
                { id: "c3", text: "2,000 ກິໂລແມັດ" },
                { id: "c4", text: "1,200 ກິໂລແມັດ" },
            ],
            correctChoiceId: "c1",
        },
        {
            id: "q3",
            text: "ວັນຊາດຂອງ ສປປ ລາວ ແມ່ນວັນທີເທົ່າໃດ?",
            type: "multiple-choice",
            choices: [
                { id: "c1", text: "7 ຕຸລາ" },
                { id: "c2", text: "2 ທັນວາ" },
                { id: "c3", text: "13 ກຸມພາ" },
                { id: "c4", text: "8 ມີນາ" },
            ],
            correctChoiceId: "c2",
        },
        {
            id: "q4",
            text: "ພະທາດຫຼວງວຽງຈັນ ສ້າງຂຶ້ນໃນສະໄໝໃດ?",
            type: "multiple-choice",
            choices: [
                { id: "c1", text: "ເຈົ້າຟ້າງຸ່ມ" },
                { id: "c2", text: "ເຈົ້າໄຊເສດຖາທິລາດ" },
                { id: "c3", text: "ເຈົ້າອານຸວົງ" },
                { id: "c4", text: "ເຈົ້າສຸລິຍະວົງສາ" },
            ],
            correctChoiceId: "c2",
        },
        {
            id: "q5",
            text: "ປະເທດລາວ ມີຊາຍແດນຕິດກັບຈັກປະເທດ?",
            type: "multiple-choice",
            choices: [
                { id: "c1", text: "3 ປະເທດ" },
                { id: "c2", text: "4 ປະເທດ" },
                { id: "c3", text: "5 ປະເທດ" },
                { id: "c4", text: "6 ປະເທດ" },
            ],
            correctChoiceId: "c3",
        },

        // 2. True / False (5 Questions)
        {
            id: "q6",
            text: "ປະເທດລາວ ບໍ່ມີທາງອອກສູ່ທະເລ ແມ່ນຫຼືບໍ່?",
            type: "true-false",
            choices: [
                { id: "true", text: "ຖືກ" },
                { id: "false", text: "ຜິດ" },
            ],
            correctChoiceId: "true",
        },
        {
            id: "q7",
            text: "ພູເບ້ຍ ແມ່ນພູທີ່ສູງທີ່ສຸດໃນປະເທດລາວ.",
            type: "true-false",
            choices: [
                { id: "true", text: "ຖືກ" },
                { id: "false", text: "ຜິດ" },
            ],
            correctChoiceId: "true",
        },
        {
            id: "q8",
            text: "ແຂວງຈຳປາສັກ ຕັ້ງຢູ່ພາກເໜືອຂອງປະເທດລາວ.",
            type: "true-false",
            choices: [
                { id: "true", text: "ຖືກ" },
                { id: "false", text: "ຜິດ" },
            ],
            correctChoiceId: "false",
        },
        {
            id: "q9",
            text: "ສະກຸນເງິນຂອງລາວ ແມ່ນ 'ບາດ'.",
            type: "true-false",
            choices: [
                { id: "true", text: "ຖືກ" },
                { id: "false", text: "ຜິດ" },
            ],
            correctChoiceId: "false",
        },
        {
            id: "q10",
            text: "ນ້ຳຕົກຕາດຄອນພະເພັງ ຕັ້ງຢູ່ແຂວງຈຳປາສັກ.",
            type: "true-false",
            choices: [
                { id: "true", text: "ຖືກ" },
                { id: "false", text: "ຜິດ" },
            ],
            correctChoiceId: "true",
        },

        // 3. Fill in the Blank (5 Questions)
        {
            id: "q11",
            text: "ສັດປະຈຳຊາດ ຂອງປະເທດລາວ ແມ່ນ_____.",
            type: "fill-blank",
            correctAnswerText: "ຊ້າງ",
        },
        {
            id: "q12",
            text: "ດອກໄມ້ປະຈຳຊາດ ຂອງປະເທດລາວ ແມ່ນດອກ_____.",
            type: "fill-blank",
            correctAnswerText: "ຈຳປາ",
        },
        {
            id: "q13",
            text: "ທຸງຊາດລາວ ມີ 3 ສີ ຄື: ສີແດງ, ສີຟ້າ ແລະ ສີ_____.",
            type: "fill-blank",
            correctAnswerText: "ຂາວ",
        },
        {
            id: "q14",
            text: "ຄຳຂວັນຂອງປະເທດລາວ ແມ່ນ: ສັນຕິພາບ, ເອກະລາດ, ປະຊາທິປະໄຕ, _____, ວັດທະນະຖາວອນ.",
            type: "fill-blank",
            correctAnswerText: "ເອກະພາບ",
        },
        {
            id: "q15",
            text: "ສູນກາງບໍລິຫານຂອງແຂວງຊຽງຂວາງ ແມ່ນເມືອງ_____.",
            type: "fill-blank",
            correctAnswerText: "ແປກ",
        },
    ],
};
