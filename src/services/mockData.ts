import type { User } from "@/types/user";
import type { Exam } from "@/types/exam";

export const MOCK_USERS: User[] = [
    {
        id: "teacher-1",
        name: "ອຈ ກິດຕິໄຊ ແສງທອງ",
        username: "jo_sangthong",
        role: "teacher",
    },
    {
        id: "student-1",
        name: "ນັກສຶກສາ ໄອທີ",
        username: "student_01",
        role: "student",
    },
];

export const MOCK_EXAM: Exam = {
    id: "hardware-exam-01",
    title: "ບົດກວດກາ: ຄວາມຮູ້ພື້ນຖານ ແລະ ອຸປະກອນຄອມພິວເຕີ",
    questions: [
        // --- 1. Multiple Choice (20 Questions: q1 - q20) ---
        {
            id: "q1",
            text: "ໂຄງສ້າງລະບົບຄອມພິວເຕີອີງໃສ່ສະຖາປັດຕະຍະກຳໃດ?",
            type: "multiple-choice",
            choices: [
                { id: "c1", text: "Harvard Architecture" },
                { id: "c2", text: "Von Neumann Architecture" },
                { id: "c3", text: "Silicon Architecture" },
                { id: "c4", text: "Intel Architecture" },
            ],
            correctChoiceId: "c2",
        },
        {
            id: "q2",
            text: "ສ່ວນປະກອບໃດປຽບເໝືອນ 'ສະໝອງ' ຂອງຄອມພິວເຕີ?",
            type: "multiple-choice",
            choices: [
                { id: "c1", text: "RAM" },
                { id: "c2", text: "Motherboard" },
                { id: "c3", text: "CPU" },
                { id: "c4", text: "SSD" },
            ],
            correctChoiceId: "c3",
        },
        {
            id: "q3",
            text: "ໜ່ວຍຄວາມຈຳປະເພດໃດທີ່ຂໍ້ມູນຈະຫາຍໄປເມື່ອດັບໄຟ?",
            type: "multiple-choice",
            choices: [
                { id: "c1", text: "ROM" },
                { id: "c2", text: "HDD" },
                { id: "c3", text: "SSD" },
                { id: "c4", text: "RAM" },
            ],
            correctChoiceId: "c4",
        },
        {
            id: "q4",
            text: "SSD ມີຄວາມໄວຫຼາຍກວ່າ HDD ປະມານຈັກເທົ່າ?",
            type: "multiple-choice",
            choices: [
                { id: "c1", text: "2 ເທົ່າ" },
                { id: "c2", text: "5-10 ເທົ່າ" },
                { id: "c3", text: "20 ເທົ່າ" },
                { id: "c4", text: "50 ເທົ່າ" },
            ],
            correctChoiceId: "c2",
        },
        {
            id: "q5",
            text: "ອຸປະກອນໃດເຮັດໜ້າທີ່ແປງໄຟຟ້າ AC ເປັນ DC?",
            type: "multiple-choice",
            choices: [
                { id: "c1", text: "CPU Cooler" },
                { id: "c2", text: "GPU" },
                { id: "c3", text: "PSU (Power Supply)" },
                { id: "c4", text: "Case" },
            ],
            correctChoiceId: "c3",
        },
        {
            id: "q6",
            text: "ຖ້າຕ້ອງການໃຊ້ງານດ້ານ Graphic Design ຄວນເລືອກ Panel ຈໍພາບແບບໃດ?",
            type: "multiple-choice",
            choices: [
                { id: "c1", text: "TN Panel" },
                { id: "c2", text: "VA Panel" },
                { id: "c3", text: "IPS Panel" },
                { id: "c4", text: "LCD Panel" },
            ],
            correctChoiceId: "c3",
        },
        {
            id: "q7",
            text: "ຄ່າຄວາມລະອຽດ (Resolution) ແບບ Full HD ແມ່ນເທົ່າໃດ?",
            type: "multiple-choice",
            choices: [
                { id: "c1", text: "1280x720" },
                { id: "c2", text: "1920x1080" },
                { id: "c3", text: "2560x1440" },
                { id: "c4", text: "3840x2160" },
            ],
            correctChoiceId: "c2",
        },
        {
            id: "q8",
            text: "ອຸປະກອນໃດຈັດຢູ່ໃນໝວດ Communication Devices?",
            type: "multiple-choice",
            choices: [
                { id: "c1", text: "Scanner" },
                { id: "c2", text: "Modem / Network Card" },
                { id: "c3", text: "Printer" },
                { id: "c4", text: "Webcam" },
            ],
            correctChoiceId: "c2",
        },
        {
            id: "q9",
            text: "ຫົວຕໍ່ສາຍ (Connector) ປະເພດໃດທີ່ສົ່ງໄດ້ທັງພາບ ແລະ ສຽງໃນສາຍດຽວ?",
            type: "multiple-choice",
            choices: [
                { id: "c1", text: "VGA" },
                { id: "c2", text: "DVI" },
                { id: "c3", text: "HDMI" },
                { id: "c4", text: "PS/2" },
            ],
            correctChoiceId: "c3",
        },
        {
            id: "q10",
            text: "ໄຟຟ້າສະຖິດ (ESD) ສາມາດປ້ອງກັນໄດ້ດ້ວຍອຸປະກອນໃດ?",
            type: "multiple-choice",
            choices: [
                { id: "c1", text: "Antistatic Wristband" },
                { id: "c2", text: "USB Flash Drive" },
                { id: "c3", text: "CPU Cooler" },
                { id: "c4", text: "Power Strip" },
            ],
            correctChoiceId: "c1",
        },
        {
            id: "q11",
            text: "Keyboard ປະເພດໃດທີ່ມີຄວາມທົນທານສູງ ແລະ ມີ Switch ແຍກແຕ່ລະປຸ່ມ?",
            type: "multiple-choice",
            choices: [
                { id: "c1", text: "Membrane Keyboard" },
                { id: "c2", text: "Mechanical Keyboard" },
                { id: "c3", text: "Wireless Keyboard" },
                { id: "c4", text: "Virtual Keyboard" },
            ],
            correctChoiceId: "c2",
        },
        {
            id: "q12",
            text: "ຄອມພິວເຕີປະເພດໃດທີ່ອອກແບບມາເພື່ອເຮັດວຽກຕະຫຼອດ 24/7?",
            type: "multiple-choice",
            choices: [
                { id: "c1", text: "Desktop" },
                { id: "c2", text: "Laptop" },
                { id: "c3", text: "Server" },
                { id: "c4", text: "Workstation" },
            ],
            correctChoiceId: "c3",
        },
        {
            id: "q13",
            text: "Refresh Rate ຂອງຈໍພາບມີຫົວໜ່ວຍວັດແທກເປັນຫຍັງ?",
            type: "multiple-choice",
            choices: [
                { id: "c1", text: "Milliseconds (ms)" },
                { id: "c2", text: "Hertz (Hz)" },
                { id: "c3", text: "Watts (W)" },
                { id: "c4", text: "Gigahertz (GHz)" },
            ],
            correctChoiceId: "c2",
        },
        {
            id: "q14",
            text: "ບໍລິສັດຜູ້ຜະລິດ CPU ຫຼັກໃນປັດຈຸບັນແມ່ນໃຜ?",
            type: "multiple-choice",
            choices: [
                { id: "c1", text: "NVIDIA ແລະ AMD" },
                { id: "c2", text: "Intel ແລະ NVIDIA" },
                { id: "c3", text: "Intel ແລະ AMD" },
                { id: "c4", text: "Microsoft ແລະ Apple" },
            ],
            correctChoiceId: "c3",
        },
        {
            id: "q15",
            text: "ຫົວຕໍ່ USB ປະເພດໃດທີ່ສາມາດສຽບໄດ້ທັງສອງດ້ານ?",
            type: "multiple-choice",
            choices: [
                { id: "c1", text: "USB Type-A" },
                { id: "c2", text: "USB Type-B" },
                { id: "c3", text: "USB Type-C" },
                { id: "c4", text: "Micro-USB" },
            ],
            correctChoiceId: "c3",
        },
        {
            id: "q16",
            text: "ອຸປະກອນໃດທີ່ໃຊ້ໃນການປົກປ້ອງສ່ວນປະກອບພາຍໃນຄອມພິວເຕີ?",
            type: "multiple-choice",
            choices: [
                { id: "c1", text: "Mainboard" },
                { id: "c2", text: "Case" },
                { id: "c3", text: "RAM Slots" },
                { id: "c4", text: "GPU" },
            ],
            correctChoiceId: "c2",
        },
        {
            id: "q17",
            text: "Response Time ທີ່ດີ (ຕ່ຳ) ເໝາະສົມກັບການໃຊ້ງານປະເພດໃດ?",
            type: "multiple-choice",
            choices: [
                { id: "c1", text: "ວຽກຫ້ອງການ" },
                { id: "c2", text: "ການຫຼິ້ນເກມ (Gaming)" },
                { id: "c3", text: "ການເບິ່ງໜັງ" },
                { id: "c4", text: "ການພິມເອກະສານ" },
            ],
            correctChoiceId: "c2",
        },
        {
            id: "q18",
            text: "ສັນຍາລັກ '80 Plus' ມັກຈະປະກົດຢູ່ເທິງອຸປະກອນໃດ?",
            type: "multiple-choice",
            choices: [
                { id: "c1", text: "CPU" },
                { id: "c2", text: "RAM" },
                { id: "c3", text: "PSU" },
                { id: "c4", text: "Monitor" },
            ],
            correctChoiceId: "c3",
        },
        {
            id: "q19",
            text: "ອຸປະກອນໃດຕໍ່ໄປນີ້ແມ່ນອຸປະກອນປ້ອນຂໍ້ມູນ (Input)?",
            type: "multiple-choice",
            choices: [
                { id: "c1", text: "Printer" },
                { id: "c2", text: "Speaker" },
                { id: "c3", text: "Scanner" },
                { id: "c4", text: "Monitor" },
            ],
            correctChoiceId: "c3",
        },
        {
            id: "q20",
            text: "ຖ້າຈໍພາບຂຶ້ນຂໍ້ຄວາມ 'No Signal' ສິ່ງທຳອິດທີ່ຄວນກວດສອບຄື?",
            type: "multiple-choice",
            choices: [
                { id: "c1", text: "ປ່ຽນຈໍພາບໃໝ່" },
                { id: "c2", text: "ກວດສາຍສັນຍານ (HDMI/DP/VGA)" },
                { id: "c3", text: "ຕິດຕັ້ງ Windows ໃໝ່" },
                { id: "c4", text: "ຖອດ RAM ອອກ" },
            ],
            correctChoiceId: "c2",
        },

        // --- 2. True / False (15 Questions: q21 - q35) ---
        {
            id: "q21",
            text: "RAM ແມ່ນໜ່ວຍຄວາມຈຳຖາວອນ ຂໍ້ມູນບໍ່ເສຍເມື່ອດັບໄຟ.",
            type: "true-false",
            choices: [
                { id: "true", text: "ຖືກ" },
                { id: "false", text: "ຜິດ" },
            ],
            correctChoiceId: "false",
        },
        {
            id: "q22",
            text: "ລະບົບຄອມພິວເຕີປະກອບດ້ວຍ 5 ສ່ວນຫຼັກ ຕາມ Von Neumann Architecture.",
            type: "true-false",
            choices: [
                { id: "true", text: "ຖືກ" },
                { id: "false", text: "ຜິດ" },
            ],
            correctChoiceId: "true",
        },
        {
            id: "q23",
            text: "Mechanical Keyboard ປົກກະຕິມີລາຄາຖືກກວ່າ Membrane Keyboard.",
            type: "true-false",
            choices: [
                { id: "true", text: "ຖືກ" },
                { id: "false", text: "ຜິດ" },
            ],
            correctChoiceId: "false",
        },
        {
            id: "q24",
            text: "VGA ແມ່ນຫົວຕໍ່ແບບອານາລັອກ (Analog) ແລະ ບໍ່ສາມາດສົ່ງສັນຍານສຽງໄດ້.",
            type: "true-false",
            choices: [
                { id: "true", text: "ຖືກ" },
                { id: "false", text: "ຜິດ" },
            ],
            correctChoiceId: "true",
        },
        {
            id: "q25",
            text: "IPS Panel ໃຫ້ມຸມມອງ (Viewing Angle) ທີ່ແຄບກວ່າ TN Panel.",
            type: "true-false",
            choices: [
                { id: "true", text: "ຖືກ" },
                { id: "false", text: "ຜິດ" },
            ],
            correctChoiceId: "false",
        },
        {
            id: "q26",
            text: "ການເກັບຮັກສາອຸປະກອນຮາດແວຄວນເກັບໄວ້ໃນຖົງກັນໄຟຟ້າສະຖິດ (Antistatic Bag).",
            type: "true-false",
            choices: [
                { id: "true", text: "ຖືກ" },
                { id: "false", text: "ຜິດ" },
            ],
            correctChoiceId: "true",
        },
        {
            id: "q27",
            text: "SSD ເປັນອຸປະກອນທີ່ມີສ່ວນປະກອບເປັນກົນຈັກ (ມີຈານໝູນ).",
            type: "true-false",
            choices: [
                { id: "true", text: "ຖືກ" },
                { id: "false", text: "ຜິດ" },
            ],
            correctChoiceId: "false",
        },
        {
            id: "q28",
            text: "ຍິ່ງມີ RAM ຫຼາຍ, ລະບົບຍິ່ງສາມາດເຮັດວຽກໄດ້ຫຼາຍໂປຣແກຣມພ້ອມກັນ.",
            type: "true-false",
            choices: [
                { id: "true", text: "ຖືກ" },
                { id: "false", text: "ຜິດ" },
            ],
            correctChoiceId: "true",
        },
        {
            id: "q29",
            text: "DisplayPort (DP) ຖືກອອກແບບມາເພື່ອໃຊ້ກັບຄອມພິວເຕີ ແລະ ມີປະສິດທິພາບດີກວ່າ HDMI ສຳລັບ Gaming.",
            type: "true-false",
            choices: [
                { id: "true", text: "ຖືກ" },
                { id: "false", text: "ຜິດ" },
            ],
            correctChoiceId: "true",
        },
        {
            id: "q30",
            text: "ຊອບແວ (Software) ແມ່ນສ່ວນປະກອບທາງກາຍະພາບທີ່ສາມາດສຳຜັດໄດ້.",
            type: "true-false",
            choices: [
                { id: "true", text: "ຖືກ" },
                { id: "false", text: "ຜິດ" },
            ],
            correctChoiceId: "false",
        },
        {
            id: "q31",
            text: "ມາດຕະຖານ 4K (UHD) ມີຄວາມລະອຽດສູງກວ່າ 1080p (Full HD).",
            type: "true-false",
            choices: [
                { id: "true", text: "ຖືກ" },
                { id: "false", text: "ຜິດ" },
            ],
            correctChoiceId: "true",
        },
        {
            id: "q32",
            text: "Microphone ແມ່ນອຸປະກອນສະແດງຜົນ (Output Device).",
            type: "true-false",
            choices: [
                { id: "true", text: "ຖືກ" },
                { id: "false", text: "ຜິດ" },
            ],
            correctChoiceId: "false",
        },
        {
            id: "q33",
            text: "GPU ແບບ Dedicated ແມ່ນການ໌ດຈໍທີ່ແຍກຕ່າງຫາກ ບໍ່ໄດ້ຕິດມາກັບ CPU.",
            type: "true-false",
            choices: [
                { id: "true", text: "ຖືກ" },
                { id: "false", text: "ຜິດ" },
            ],
            correctChoiceId: "true",
        },
        {
            id: "q34",
            text: "ຄອມພິວເຕີແບບ Laptop ສາມາດເຄື່ອນຍ້າຍໄດ້ສະດວກ ແຕ່ຍາກຕໍ່ການ Upgrade.",
            type: "true-false",
            choices: [
                { id: "true", text: "ຖືກ" },
                { id: "false", text: "ຜິດ" },
            ],
            correctChoiceId: "true",
        },
        {
            id: "q35",
            text: "ຄວນໃຊ້ຜ້າ Microfiber ໃນການທຳຄວາມສະອາດໜ້າຈໍພາບ.",
            type: "true-false",
            choices: [
                { id: "true", text: "ຖືກ" },
                { id: "false", text: "ຜິດ" },
            ],
            correctChoiceId: "true",
        },

        // --- 3. Fill in the Blank (15 Questions: q36 - q50) ---
        {
            id: "q36",
            text: "ສ່ວນປະກອບຫຼັກທີ່ເຊື່ອມຕໍ່ອຸປະກອນທັງໝົດເຂົ້າດ້ວຍກັນເອີ້ນວ່າ _____.",
            type: "fill-blank",
            correctAnswerText: "Motherboard",
        },
        {
            id: "q37",
            text: "ໜ່ວຍວັດແທກຄວາມໄວຂອງ CPU ແມ່ນ _____.",
            type: "fill-blank",
            correctAnswerText: "GHz",
        },
        {
            id: "q38",
            text: "_____ ແມ່ນອຸປະກອນທີ່ປ່ຽນສັນຍານພາບຈາກຄອມພິວເຕີມາສະແດງໃຫ້ຜູ້ໃຊ້ເຫັນ.",
            type: "fill-blank",
            correctAnswerText: "Monitor",
        },
        {
            id: "q39",
            text: "ຄ່າ _____ ຂອງ Mouse ບົ່ງບອກເຖິງຄວາມລະອຽດ ແລະ ຄວາມໄວໃນການເຄື່ອນທີ່.",
            type: "fill-blank",
            correctAnswerText: "DPI",
        },
        {
            id: "q40",
            text: "Panel ປະເພດ _____ ມີຄ່າ Contrast ສູງທີ່ສຸດ ເໝາະສຳລັບການເບິ່ງໜັງ.",
            type: "fill-blank",
            correctAnswerText: "VA",
        },
        {
            id: "q41",
            text: "_____ Software ຕົວຢ່າງເຊັ່ນ Windows, macOS ແລະ Linux.",
            type: "fill-blank",
            correctAnswerText: "System",
        },
        {
            id: "q42",
            text: "ໜ້າທີ່ຂອງ _____ ແມ່ນການລະບາຍຄວາມຮ້ອນອອກຈາກ CPU.",
            type: "fill-blank",
            correctAnswerText: "CPU Cooler",
        },
        {
            id: "q43",
            text: "ຄ່າ _____ ແມ່ນຈຳນວນຄັ້ງທີ່ຈໍພາບໂຫຼດຮູບພາບໃໝ່ຕໍ່ວິນາທີ (Hz).",
            type: "fill-blank",
            correctAnswerText: "Refresh Rate",
        },
        {
            id: "q44",
            text: "ອຸປະກອນທີ່ໃຊ້ສະແກນເອກະສານເຈ້ຍໃຫ້ເປັນຂໍ້ມູນດິຈິຕອນຄື _____.",
            type: "fill-blank",
            correctAnswerText: "Scanner",
        },
        {
            id: "q45",
            text: "_____ ແມ່ນການ໌ດທີ່ເຮັດໜ້າທີ່ເຊື່ອມຕໍ່ຄອມພິວເຕີເຂົ້າກັບເຄືອຂ່າຍ Internet.",
            type: "fill-blank",
            correctAnswerText: "Network Card",
        },
        {
            id: "q46",
            text: "ເວລາທີ່ Pixel ປ່ຽນສີ ເອີ້ນວ່າ _____ (ວັດແທກເປັນ ms).",
            type: "fill-blank",
            correctAnswerText: "Response Time",
        },
        {
            id: "q47",
            text: "ສາຍ _____ ເປັນມາດຕະຖານເກົ່າ ທີ່ມີຫົວສີຟ້າ ແລະ ມີ 15 ຂາ.",
            type: "fill-blank",
            correctAnswerText: "VGA",
        },
        {
            id: "q48",
            text: "CPU ຂອງບໍລິສັດ Intel ໃນຕະກູນ _____ ເປັນລຸ້ນທີ່ມີປະສິດທິພາບສູງສຸດ.",
            type: "fill-blank",
            correctAnswerText: "Core i9",
        },
        {
            id: "q49",
            text: "ຂໍ້ດີຂອງການ _____ ເອງຄື ປະຫຍັດຄ່າໃຊ້ຈ່າຍ ແລະ ສາມາດເລືອກອຸປະກອນໄດ້ຕາມຕ້ອງການ.",
            type: "fill-blank",
            correctAnswerText: "ປະກອບຄອມພິວເຕີ",
        },
        {
            id: "q50",
            text: "ຖ້າຈະເລືອກຊື້ຈໍພາບຂະໜາດ 27 ນິ້ວ ຄວນມີຄວາມລະອຽດຢ່າງໜ້ອຍ _____ (2K).",
            type: "fill-blank",
            correctAnswerText: "1440p",
        },
    ],
};