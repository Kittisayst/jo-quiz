# ເອກະສານອອກແບບລະບົບ (System Design Document)

## 1. ພາບລວມໂຄງການ (Project Overview)

**ຊື່ໂຄງການ:** JO-Quiz
**ລາຍລະອຽດ:** ລະບົບສອບເສັງອອນລາຍ (Online Exam System) ທີ່ອອກແບບມາເພື່ອອຳນວຍຄວາມສະດວກໃຫ້ແກ່ອາຈານ ແລະ ນັກສຶກສາ. ອາຈານສາມາດສ້າງຊຸດຄຳຖາມ ແລະ ເບິ່ງລາຍງານຜົນການສອບເສັງ, ສ່ວນນັກສຶກສາສາມາດເຂົ້າສອບເສັງໄດ້ງ່າຍຜ່ານລະຫັດຫ້ອງສອບເສັງ.

## 2. ຟັງຊັນການເຮັດວຽກຫຼັກ (Core Features)

### 2.1 ສຳລັບອາຈານ (Teacher/Admin)

-   **ຈັດການຄຳຖາມ (Question Management):**
    -   ສ້າງ, ອ່ານ, ແກ້ໄຂ, ແລະ ລຶບ ຄຳຖາມ (CRUD Functionality).
    -   ຮອງຮັບປະເພດຄຳຖາມ: ປາລະນៃ (Multiple Choice), ຖືກ/ຜິດ (True/False), ແລະ ຕື່ມຄຳໃນບ່ອນຫວ່າງ (Fill in the blank).
-   **ນຳເຂົ້າຂໍ້ມູນ (Data Import):**
    -   ສາມາດນຳເຂົ້າຄຳຖາມຈຳນວນຫຼາຍໄດ້ຈາກໄຟລ໌ Excel.
-   **ການຈັດການຫ້ອງເສັງ (Class/Room Management):**
    -   ສ້າງຫ້ອງສອບເສັງ ແລະ ກຳນົດລະຫັດເຂົ້າຫ້ອງ (Room Code).
-   **ລາຍງານ ແລະ ຜົນການສອບເສັງ (Reports & Analytics):**
    -   ເບິ່ງຄະແນນຂອງນັກສຶກສາແຕ່ລະຄົນ.
    -   ສະຫຼຸບຜົນການສອບເສັງໃນຮູບແບບຕ່າງໆ.

### 2.2 ສຳລັບນັກສຶກສາ (Student)

-   **ການເຂົ້າສອບເສັງ (Join Exam):**
    -   ປ້ອນລະຫັດຫ້ອງ (Enter Room Code) > ປ້ອນຊື່ ແລະ ນາມສະກຸນ (Enter Name) > ເລີ່ມຕອບຄຳຖາມ.
-   **ການຕອບຄຳຖາມ (Taking Exam):**
    -   ຕອບຄຳຖາມຕາມເວລາທີ່ກຳນົດ.
-   **ຜົນການສອບເສັງ (Results):**
    -   ສະແດງຄະແນນທັນທີຫຼັງຈາກສອບເສັງສຳເລັດ (Real-time Score).

## 3. ໂຄງສ້າງຂໍ້ມູນ (Data Structure)

### 3.1 ຂໍ້ມູນຫຼັກ (Core Data)

-   **Questions (ຄຳຖາມ):** ເກັບລາຍລະອຽດຄຳຖາມ, ຕົວເລືອກ, ແລະ ຄຳຕອບທີ່ຖືກຕ້ອງ.
-   **Classes/Exam Rooms (ຫ້ອງເສັງ):** ລະຫັດຫ້ອງ, ຊື່ວິຊາ, ເວລາສອບເສັງ.
-   **Answers (ຄຳຕອບ):** ສະເລີຍຄຳຕອບສຳລັບກວດສອບ.
-   **User Answers (ຄຳຕອບຂອງນັກສຶກສາ):** ບັນທຶກການຕອບຂອງນັກສຶກສາແຕ່ລະຄົນເພື່ອປະມວນຜົນຄະແນນ.

## 4. ເຄື່ອງມື ແລະ ເຕັກໂນໂລຊີ (Tech Stack)

### 4.1 Frontend (ສ່ວນສະແດງຜົນ)

-   **Language:** TypeScript
-   **Framework:** React
-   **Build Tool:** Vite (ເພື່ອຄວາມໄວໃນການ Build ແລະ Develop)
-   **Styling:** TailwindCSS (ຕົກແຕ່ງໜ້າຕາເວັບໄຊ)

### 4.2 State Management & Logic

-   **State Management:** Zustand (ຈັດການຂໍ້ມູນໃນ application ໃຫ້ງ່າຍ ແລະ ມີປະສິດທິພາບ)
-   **Form Handling:** React Hook Form (ຈັດການຟອມການກອກຂໍ້ມູນ)
-   **Validation:** Zod (ກວດສອບຄວາມຖືກຕ້ອງຂອງຂໍ້ມູນ)
-   **API Client:** Axios (ເຊື່ອມຕໍ່ກັບ Backend)

### 4.3 Backend & Database (ສ່ວນຂໍ້ມູນ ແລະ ຖານຂໍ້ມູນ)

-   **Platform:** Firebase
    -   **Authentication:** ຈັດການການເຂົ້າສູ່ລະບົບ.
    -   **Firestore / Realtime Database:** ເກັບຂໍ້ມູນຄຳຖາມ ແລະ ຜົນສອບເສັງແບບ Real-time.
