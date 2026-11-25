const QUESTIONS = [
  {
    id: 1,
    hasOfficialKey: false,
    question: "Sự kiện nào được Đảng ta đánh giá là \"Mở ra con đường giải phóng cho các dân tộc bị áp bức trên thế giới\"?",
    options: [
      "Cách mạng Tháng Mười Nga năm 1917",
      "Cách mạng Tháng Tám Việt Nam năm 1945",
      "Công xã Pari năm 1871",
      "Chiến thắng Điện Biên Phủ năm 1954"
    ],
    answer: 0
  },
  {
    id: 2,
    hasOfficialKey: false,
    question: "Tinh thần yêu nước, thương dân và nhân cách phẩm chất tốt đẹp của ai đã có ảnh hưởng sâu sắc đến tư tưởng, nhân cách của Hồ Chí Minh thuở thiếu thời?",
    options: [
      "Thân phụ Nguyễn Sinh Sắc và thân mẫu Hoàng Thị Loan",
      "Các sĩ phu yêu nước như Phan Bội Châu, Phan Châu Trinh",
      "Các nhà tư tưởng Khai sáng Pháp",
      "Các lãnh tụ Quốc tế Cộng sản"
    ],
    answer: 0
  },
  {
    id: 3,
    hasOfficialKey: false,
    question: "Từ sự kiện nào, Hồ Chí Minh lấy tên Nguyễn Ái Quốc?",
    options: [
      "Gửi Bản yêu sách của nhân dân An Nam tới Hội nghị Vécxây (1919)",
      "Tham gia sáng lập Đảng Cộng sản Pháp tại Đại hội Tua (1920)",
      "Thành lập Hội Việt Nam Cách mạng Thanh niên (1925)",
      "Chủ trì Hội nghị hợp nhất các tổ chức cộng sản (1930)"
    ],
    answer: 0
  },
  {
    id: 4,
    hasOfficialKey: false,
    question: "Tác phẩm Đường cách mệnh của Hồ Chí Minh, lần đầu tiên được xuất bản ở nước nào?",
    options: [
      "Trung Quốc",
      "Pháp",
      "Liên Xô",
      "Việt Nam"
    ],
    answer: 0
  },
  {
    id: 5,
    hasOfficialKey: false,
    question: "Theo quan niệm của Đảng ta, vào thời kỳ nào Hồ Chí Minh đã vượt qua thử thách, giữ vững đường lối và phương pháp cách mạng đúng đắn, sáng tạo của mình?",
    options: [
      "Thời kỳ 1930 - 1941",
      "Thời kỳ 1911 - 1920",
      "Thời kỳ 1920 - 1930",
      "Thời kỳ 1945 - 1969"
    ],
    answer: 0
  },
  {
    id: 6,
    hasOfficialKey: false,
    question: "Nội dung nào là tư tưởng của Hồ Chí Minh về độc lập dân tộc?",
    options: [
      "Độc lập, tự do là quyền thiêng liêng, bất khả xâm phạm của tất cả các dân tộc",
      "Độc lập dân tộc chỉ cần về mặt chính trị, không cần kinh tế",
      "Độc lập dân tộc tách rời hoàn toàn với tự do và hạnh phúc của nhân dân",
      "Độc lập dân tộc phụ thuộc vào sự ban phát của các nước lớn"
    ],
    answer: 0
  },
  {
    id: 7,
    hasOfficialKey: false,
    question: "Tư tưởng Hồ Chí Minh về quyền của các dân tộc thuộc địa lần đầu tiên được phản ánh trong sự kiện nào?",
    options: [
      "Gửi Bản yêu sách 8 điểm của nhân dân An Nam tới Hội nghị Vécxây (1919)",
      "Đọc Sơ thảo Luận cương của Lênin (1920)",
      "Xuất bản tác phẩm Đường cách mệnh (1927)",
      "Đọc Tuyên ngôn Độc lập (1945)"
    ],
    answer: 0
  },
  {
    id: 8,
    hasOfficialKey: false,
    question: "Theo quan điểm của Đảng ta, sự thất bại của Phong trào yêu nước (PTYN) cuối thế kỷ XIX, đầu thế kỷ XX phản ánh điều gì?",
    options: [
      "Sự khủng hoảng, bế tắc về giai cấp lãnh đạo và đường lối cứu nước",
      "Nhân dân Việt Nam thiếu tinh thần yêu nước và ý chí đấu tranh",
      "Thực dân Pháp quá mạnh nên không thể đánh thắng được",
      "Không có sự ủng hộ của các nước tư bản phương Tây"
    ],
    answer: 0
  },
  {
    id: 9,
    hasOfficialKey: false,
    question: "Theo quan điểm Hồ Chí Minh, Đảng Cộng sản Việt Nam có vai trò như thế nào?",
    options: [
      "Là nhân tố hàng đầu quyết định mọi thắng lợi của cách mạng Việt Nam",
      "Chỉ giữ vai trò tham mưu cho chính quyền nhà nước",
      "Là một tổ chức quần chúng tự phát của công nhân",
      "Chỉ lãnh đạo trong giai đoạn giành chính quyền"
    ],
    answer: 0
  },
  {
    id: 10,
    hasOfficialKey: false,
    question: "Hồ Chí Minh viết về vai trò của Công nhân, Nông dân trong Cách mạng Việt Nam: \"lòng cách mệnh càng ………, chí cách mệnh càng …..…. công nông là tay không chân rồi, nếu..……. thì chỉ mất một cái kiếp khổ, nếu ….…. thì được cả thế giới, cho nên họ gan góc\". Tìm dãy chữ phù hợp với tư tưởng của Người.",
    options: [
      "bền - quyết - thua - được",
      "cao - mạnh - mất - thắng",
      "sâu - vững - thua - thắng",
      "mạnh - bền - mất - được"
    ],
    answer: 0
  },
  {
    id: 11,
    hasOfficialKey: false,
    question: "Hồ Chí Minh quan niệm: \"Sự đoàn kết ………. lực lượng các nước xã hội chủ nghĩa và sự đoàn kết ……… các Đảng Cộng sản và công nhân …….. các nước có ý nghĩa quan trọng bậc nhất\". Tìm dãy chữ phù hợp với tư tưởng của Người?",
    options: [
      "chặt chẽ - nhất trí - tất cả",
      "rộng rãi - thống nhất - nhiều",
      "bền vững - đồng lòng - mọi",
      "toàn diện - chặt chẽ - các"
    ],
    answer: 0
  },
  {
    id: 12,
    hasOfficialKey: false,
    question: "Nội dung nào là quan niệm của Hồ Chí Minh về mối quan hệ giữa độc lập dân tộc và chủ nghĩa xã hội (CNXH)?",
    options: [
      "Độc lập dân tộc là cơ sở, tiền đề để tiến lên CNXH; CNXH là điều kiện bảo đảm nền độc lập dân tộc vững chắc",
      "Độc lập dân tộc và CNXH là hai quá trình hoàn toàn tách biệt nhau",
      "Phải xây dựng xong CNXH rồi mới đấu tranh giành độc lập dân tộc",
      "Chỉ cần giành được độc lập dân tộc, không nhất thiết phải đi lên CNXH"
    ],
    answer: 0
  },
  {
    id: 13,
    hasOfficialKey: false,
    question: "Hồ Chí Minh nhấn mạnh: \"Mỗi đảng viên và cán bộ phải thật sự thấm nhuần đạo đức cách mạng, thật sự cần kiệm, liêm chính, chí công vô tư. Phải ….... Đảng ta thật ........ phải ……. là người lãnh đạo, là người đầy tớ thật trung thành của nhân dân\". Tìm dãy chữ phù hợp với tư tưởng của Người.",
    options: [
      "giữ gìn - trong sạch - xứng đáng",
      "xây dựng - vững mạnh - trở thành",
      "bảo vệ - đoàn kết - luôn luôn",
      "chỉnh đốn - nghiêm minh - xứng đáng"
    ],
    answer: 0
  },
  {
    id: 14,
    hasOfficialKey: false,
    question: "Trong các hoạt động của Đảng, nguyên tắc nào được Hồ Chí Minh coi là \"thang thuốc\" tốt nhất để làm cho phần tốt trong mỗi tổ chức và mỗi con người nẩy nở như hoa mùa xuân, phần xấu mất dần đi?",
    options: [
      "Tự phê bình và phê bình",
      "Tập trung dân chủ",
      "Kỷ luật nghiêm minh, tự giác",
      "Đoàn kết thống nhất trong Đảng"
    ],
    answer: 0
  },
  {
    id: 15,
    hasOfficialKey: false,
    question: "Hồ Chí Minh viết: \"Nhờ đoàn kết chặt chẽ, một lòng một dạ phục vụ …….., phục vụ nhân dân, phục vụ ………., cho nên từ ngày thành lập đến nay, Đảng ta đã đoàn kết, tổ chức lãnh đạo nhân dân ta hăng hái đấu tranh tiến từ thắng lợi này đến thắng lợi khác. Đoàn kết là một truyền thống cực kỳ quý báu của ……… và của ………. ta.\". Tìm dãy chữ phù hợp với tư tưởng của Người.",
    options: [
      "giai cấp - Tổ quốc - Đảng - dân",
      "dân tộc - giai cấp - Đảng - nước",
      "Tổ quốc - cách mạng - Đảng - dân",
      "giai cấp - cách mạng - nước - dân"
    ],
    answer: 0
  },
  {
    id: 16,
    hasOfficialKey: false,
    question: "Theo quan niệm của Hồ Chí Minh, bản chất giai cấp công nhân của Nhà nước Việt Nam thể hiện ở nội dung nào?",
    options: [
      "Nhà nước do Đảng Cộng sản lãnh đạo, định hướng đi lên CNXH và tổ chức theo nguyên tắc tập trung dân chủ",
      "Nhà nước chỉ gồm toàn bộ đại biểu là công nhân",
      "Nhà nước chỉ phục vụ riêng cho lợi ích của giai cấp công nhân",
      "Nhà nước hoạt động theo mô hình tam quyền phân lập tư sản"
    ],
    answer: 0
  },
  {
    id: 17,
    hasOfficialKey: false,
    question: "Theo quan niệm của Hồ Chí Minh, để chiến thắng đế quốc, thực dân, giải phóng dân tộc, ngoài tinh thần yêu nước còn cần đến yếu tố cơ bản nào?",
    options: [
      "Đoàn kết toàn dân tộc và sự lãnh đạo đúng đắn của Đảng Cộng sản",
      "Sự viện trợ quân sự hoàn toàn từ bên ngoài",
      "Tiềm lực kinh tế tư bản chủ nghĩa phát triển cao",
      "Sự thỏa hiệp hòa bình với chính quyền thực dân"
    ],
    answer: 0
  },
  {
    id: 18,
    hasOfficialKey: false,
    question: "Theo Hồ Chí Minh, đoàn kết trong Mặt trận nào đã góp phần làm nên thắng lợi Cách mạng tháng 8/1945?",
    options: [
      "Mặt trận Việt Minh (Việt Nam Độc lập Đồng minh)",
      "Mặt trận Liên Việt",
      "Mặt trận Dân chủ Đông Dương",
      "Mặt trận Tổ quốc Việt Nam"
    ],
    answer: 0
  },
  {
    id: 19,
    hasOfficialKey: false,
    question: "Hồ Chí Minh viết: \"Đoàn kết .......... nghĩa là mục đích phải .......... và lập trường cũng phải .......... Đoàn kết .......... nghĩa là vừa đoàn kết vừa đấu tranh\". Tìm dãy chữ phù hợp với tư tưởng của Người.",
    options: [
      "thật sự - nhất trí - nhất trí - thật sự",
      "rộng rãi - thống nhất - vững vàng - chân thành",
      "chặt chẽ - đồng lòng - kiên định - bền vững",
      "thực chất - giống nhau - thống nhất - lâu dài"
    ],
    answer: 0
  },
  {
    id: 20,
    hasOfficialKey: false,
    question: "Theo quan điểm của Hồ Chí Minh, điểm tương đồng giữa các giai cấp ở Việt Nam (nông dân, công nhân, trí thức hay địa chủ, tư sản,...) là gì?",
    options: [
      "Đều có lòng yêu nước, mong muốn độc lập dân tộc, tự do và hạnh phúc cho nhân dân",
      "Đều có cùng địa vị kinh tế và quyền sở hữu tư liệu sản xuất",
      "Đều theo hệ tư tưởng vô sản ngay từ đầu",
      "Đều có mục tiêu xóa bỏ hoàn toàn mọi hình thức sở hữu tư nhân"
    ],
    answer: 0
  },
  {
    id: 21,
    hasOfficialKey: false,
    question: "Theo Hồ Chí Minh, thực hiện đoàn kết quốc tế nhằm mục đích gì?",
    options: [
      "Kết hợp sức mạnh dân tộc với sức mạnh thời đại, tạo sức mạnh tổng hợp cho cách mạng",
      "Góp phần cùng nhân dân thế giới thực hiện thắng lợi các mục tiêu cách mạng của thời đại",
      "Tranh thủ sự đồng tình, ủng hộ và giúp đỡ của bạn bè quốc tế",
      "Tất cả các phương án trên"
    ],
    answer: 3
  },
  {
    id: 22,
    hasOfficialKey: false,
    question: "Hồ Chí Minh đã đưa ra định nghĩa văn hóa lần đầu tiên vào năm nào, ở đâu?",
    options: [
      "Tháng 8/1943, tại nhà tù Tưởng Giới Thạch (Trung Quốc)",
      "Năm 1925, tại Quảng Châu (Trung Quốc)",
      "Năm 1945, tại Hà Nội (Việt Nam)",
      "Năm 1951, tại Việt Bắc (Việt Nam)"
    ],
    answer: 0
  },
  {
    id: 23,
    hasOfficialKey: false,
    question: "Theo quan niệm Hồ Chí Minh, sức hấp dẫn của chủ nghĩa xã hội trước hết là nhờ vào yếu tố nào?",
    options: [
      "Những giá trị đạo đức cao đẹp, phẩm chất của những người cộng sản ưu tú",
      "Sự phát triển vượt bậc của khoa học kỹ thuật hiện đại",
      "Sức mạnh quân sự áp đảo của các nước xã hội chủ nghĩa",
      "Mức thu nhập vật chất cao ngay trong giai đoạn đầu"
    ],
    answer: 0
  },
  {
    id: 24,
    hasOfficialKey: false,
    question: "Hồ Chí Minh viết: “Đối với một quốc gia, cần, kiệm, liêm, chính, là..........sự giàu có về vật chất, vững mạnh về tinh thần, là.........sự văn minh tiến bộ, là........của đời sống mới”. Tìm dãy chữ phù hợp với tư tưởng của Người.",
    options: [
      "thước đo - thể hiện - nền tảng",
      "cơ sở - biểu hiện - động lực",
      "nguồn gốc - dấu hiệu - mục tiêu",
      "thước đo - kết quả - nguyên tắc"
    ],
    answer: 0
  },
  {
    id: 25,
    hasOfficialKey: false,
    question: "Theo quan niệm Hồ Chí Minh, để đánh giá đạo đức của một con người phải dựa vào yếu tố nào?",
    options: [
      "Thái độ và hành động thực tiễn đối với công việc, với nhân dân và đất nước",
      "Trình độ học vấn và bằng cấp chuyên môn",
      "Xuất thân giai cấp và địa vị xã hội",
      "Lời nói và cam kết trước tập thể"
    ],
    answer: 0
  },
  {
    id: 26,
    hasOfficialKey: false,
    question: "Hồ Chí Minh viết: “Thanh niên là người.........cách mạng cho thế hệ thanh niên.........đồng thời là người phụ trách……...thế hệ thanh niên........” Tìm dãy chữ phù hợp với tư tưởng của Người.",
    options: [
      "tiếp sức - già - dìu dắt - tương lai",
      "tiên phong - trước - hướng dẫn - mai sau",
      "kế thừa - cũ - lãnh đạo - trẻ",
      "tiếp bước - đi trước - đào tạo - kế tiếp"
    ],
    answer: 0
  },
  {
    id: 27,
    hasOfficialKey: false,
    question: "Tại Đại hội Đảng lần thứ mấy, lần đầu tiên Đảng ta khẳng định tư tưởng Hồ Chí Minh cũng là nền tảng tư tưởng, kim chỉ nam cho hoạt động của Đảng ta?",
    options: [
      "Đại hội Đảng lần thứ VII (1991)",
      "Đại hội Đảng lần thứ VI (1986)",
      "Đại hội Đảng lần thứ IX (2001)",
      "Đại hội Đảng lần thứ XI (2011)"
    ],
    answer: 0
  },
  {
    id: 28,
    hasOfficialKey: false,
    question: "Sự kiện nào có ảnh hưởng sâu sắc tới Hồ Chí Minh trên hành trình Người đi tìm đường cứu nước?",
    options: [
      "Đọc Sơ thảo lần thứ nhất những luận cương về vấn đề dân tộc và vấn đề thuộc địa của Lênin",
      "Chiến tranh thế giới thứ hai bùng nổ",
      "Phong trào Duy Tân của Phan Châu Trinh",
      "Khởi nghĩa Yên Thế của Hoàng Hoa Thám"
    ],
    answer: 0
  },
  {
    id: 29,
    hasOfficialKey: false,
    question: "HCM trịnh trọng tuyên bố với thế giới: “Nước Việt Nam có quyền hưởng tự do và độc lập, và sự thật đã thành một nước tự do và độc lập. Toàn thể dân tộc Việt Nam quyết đem tất cả ……. và ...….., …….. và của cải để giữ vững quyền tự do và độc lập ấy”. Hãy tìm dãy chữ phù hợp với tư tưởng của Người.",
    options: [
      "tinh thần - lực lượng - tính mạng",
      "ý chí - sức lực - xương máu",
      "tình cảm - trí tuệ - sinh mệnh",
      "tâm huyết - sức mạnh - tài sản"
    ],
    answer: 0
  },
  {
    id: 30,
    hasOfficialKey: false,
    question: "Trong quá trình tìm đường cứu nước và quá trình lãnh đạo cách mạng Việt Nam, Hồ Chí Minh đã kế thừa và phát triển sáng tạo quan điểm nào của Tôn Trung Sơn?",
    options: [
      "Chủ nghĩa Tam dân (Dân tộc độc lập, Dân quyền tự do, Dân sinh hạnh phúc)",
      "Thuyết Thiên mệnh của Nho giáo",
      "Chủ nghĩa xã hội không tưởng phương Tây",
      "Học thuyết Tam quyền phân lập của Môngtexkiơ"
    ],
    answer: 0
  },
  {
    id: 31,
    hasOfficialKey: false,
    question: "Theo quan điểm của Đảng ta, sự tác động của nhân tố nào có ý nghĩa quyết định bước phát triển về chất trong tư tưởng Hồ Chí Minh?",
    options: [
      "Chủ nghĩa Mác - Lênin",
      "Tinh hoa văn hóa phương Đông",
      "Tinh hoa văn hóa phương Tây",
      "Truyền thống yêu nước của dân tộc Việt Nam"
    ],
    answer: 0
  },
  {
    id: 32,
    hasOfficialKey: false,
    question: "Hồ Chí Minh đánh giá Chủ nghĩa Tam Dân của Tôn Trung Sơn có ưu điểm gì?",
    options: [
      "Phù hợp với điều kiện thực tế của nước ta (thích hợp với hoàn cảnh nước ta)",
      "Đã giải quyết triệt để vấn đề giai cấp vô sản",
      "Mang tính chất cách mạng xã hội chủ nghĩa hoàn chỉnh",
      "Có hệ thống lý luận kinh tế chính trị hoàn hảo"
    ],
    answer: 0
  },
  {
    id: 33,
    hasOfficialKey: false,
    question: "Theo quan điểm của Đảng ta, từ cơ sở nào giúp Hồ Chí Minh có hiểu biết sâu sắc về phong trào giải phóng dân tộc, về xây dựng chủ nghĩa xã hội, về xây dựng Đảng?",
    options: [
      "Từ thực tiễn hoạt động cách mạng phong phú kết hợp với việc tiếp thu lý luận Mác - Lênin",
      "Chỉ từ việc đọc sách báo tại thư viện ở Pháp",
      "Từ truyền thống gia đình Nho học ở Nghệ An",
      "Từ sự hướng dẫn trực tiếp của các sĩ phu Đông Du"
    ],
    answer: 0
  },
  {
    id: 34,
    hasOfficialKey: false,
    question: "Theo quan điểm của Đảng ta, tác phẩm nào thể hiện được nội dung cốt lõi tư tưởng Hồ Chí Minh về đường lối, phương pháp của cách mạng Việt Nam?",
    options: [
      "Cương lĩnh chính trị đầu tiên của Đảng (1930)",
      "Bản án chế độ thực dân Pháp (1925)",
      "Nhật ký trong tù (1942 - 1943)",
      "Sửa đổi lối làm việc (1947)"
    ],
    answer: 0
  },
  {
    id: 35,
    hasOfficialKey: false,
    question: "Hồ Chí Minh viết: “Trong lúc này quyền lợi của bộ phận, của ……. phải đặt dưới sự sinh tử, tồn vong của quốc gia, của ……. Trong lúc này, nếu không giải quyết được vấn đề dân tộc giải phóng, không đòi được độc lập, tự do cho toàn thể dân tộc, thì chẳng những toàn thể ……dân tộc còn chịu mãi kiếp ngựa trâu, mà quyền lợi của ……, giai cấp đến vạn năm cũng không đòi lại được”. Tìm dãy chữ phù hợp với tư tưởng của Người.",
    options: [
      "giai cấp - dân tộc - quốc gia - bộ phận",
      "cá nhân - đất nước - nhân dân - tập thể",
      "địa phương - Tổ quốc - cộng đồng - giai cấp",
      "nhóm - nhân dân - nước nhà - cá nhân"
    ],
    answer: 0
  },
  {
    id: 36,
    hasOfficialKey: false,
    question: "Với tư cách là cán bộ của Quốc tế cộng sản, Hồ Chí Minh chủ trì hội nghị BCHTW 8, tháng 5/1941 đã chủ trương giải quyết/xóa bỏ vấn đề gì?",
    options: [
      "Xóa bỏ tính chất chia rẽ, thành lập Mặt trận dân tộc thống nhất riêng cho mỗi nước Đông Dương",
      "Xóa bỏ hoàn toàn vai trò lãnh đạo của Đảng Cộng sản",
      "Xóa bỏ hình thức đấu tranh vũ trang giành chính quyền",
      "Xóa bỏ liên minh công nhân và nông dân"
    ],
    answer: 0
  },
  {
    id: 37,
    hasOfficialKey: false,
    question: "Hồ Chí Minh, với tư cách là cán bộ của Quốc tế cộng sản, khi chủ trì hội nghị BCHTW 8, tháng 5/1941, đã chủ trương tạm gác vấn đề gì?",
    options: [
      "Tạm gác khẩu hiệu cách mạng ruộng đất (đánh đổ địa chủ, chia ruộng đất cho dân cày)",
      "Tạm gác nhiệm vụ giải phóng dân tộc",
      "Tạm gác việc thành lập Mặt trận Việt Minh",
      "Tạm gác việc chuẩn bị khởi nghĩa vũ trang"
    ],
    answer: 0
  },
  {
    id: 38,
    hasOfficialKey: false,
    question: "Cách mạng tháng 8/1945 thành công, giành lại độc lập dân tộc trực tiếp từ tay kẻ thù nào?",
    options: [
      "Phát xít Nhật",
      "Thực dân Pháp",
      "Đế quốc Mỹ",
      "Quân đội Tưởng Giới Thạch"
    ],
    answer: 0
  },
  {
    id: 39,
    hasOfficialKey: false,
    question: "Sự kiện nào được Đảng ta đánh giá là mốc mở ra thời kỳ sụp đổ của hệ thống thuộc địa kiểu cũ trên phạm vi thế giới?",
    options: [
      "Chiến thắng Điện Biên Phủ năm 1954",
      "Cách mạng Tháng Tám năm 1945",
      "Đại thắng mùa Xuân năm 1975",
      "Hội nghị Giơnevơ năm 1954"
    ],
    answer: 0
  },
  {
    id: 40,
    hasOfficialKey: false,
    question: "Vào thời gian nào, Hồ Chí Minh ra lời kêu gọi đồng bào và chiến sỹ cả nước, trong đó nêu lên một chân lý lớn của thời đại “Không có gì quý hơn độc lập, tự do”?",
    options: [
      "Ngày 17/7/1966",
      "Ngày 19/12/1946",
      "Ngày 2/9/1945",
      "Ngày 30/4/1975"
    ],
    answer: 0
  },
  {
    id: 41,
    hasOfficialKey: false,
    question: "Theo quan điểm của Đảng ta, nội dung nào phản ánh giá trị tư tưởng Hồ Chí Minh đối với cách mạng Việt Nam?",
    options: [
      "Là nền tảng tư tưởng, kim chỉ nam cho hành động của Đảng và cách mạng Việt Nam, đưa cách mạng đi đến thắng lợi",
      "Chỉ có giá trị lịch sử trong giai đoạn kháng chiến chống Pháp",
      "Là học thuyết kinh tế thuần túy áp dụng cho thời kỳ công nghiệp hóa",
      "Chỉ phản ánh tư tưởng văn hóa truyền thống cổ đại"
    ],
    answer: 0
  },
  {
    id: 42,
    hasOfficialKey: false,
    question: "Trong quá trình bôn ba tìm đường cứu nước, Hồ Chí Minh góp phần sáng lập ra Đảng Cộng sản nào?",
    options: [
      "Đảng Cộng sản Pháp (1920)",
      "Đảng Cộng sản Trung Quốc (1921)",
      "Đảng Cộng sản Liên Xô",
      "Đảng Cộng sản Đức"
    ],
    answer: 0
  },
  {
    id: 43,
    hasOfficialKey: false,
    question: "Từ sự kiện nào Hồ Chí Minh đã ký tên Nguyễn Ái Quốc vào Bản yêu sách 8 điểm và gửi tới hội nghị các cường quốc họp tại Vecxay?",
    options: [
      "Hội nghị hòa bình Vécxây (Pháp) năm 1919",
      "Đại hội lần thứ XVIII Đảng Xã hội Pháp (1920)",
      "Đại hội lần thứ V Quốc tế Cộng sản (1924)",
      "Hội nghị thành lập Đảng Cộng sản Việt Nam (1930)"
    ],
    answer: 0
  },
  {
    id: 44,
    hasOfficialKey: false,
    question: "Hồ Chí Minh viết: “Dù khó khăn gian khổ đến mấy, nhân dân ta nhất định sẽ hoàn toàn thắng lợi. Đế quốc Mỹ nhất định phải cút khỏi nước ta. Tổ quốc ta nhất định sẽ thống nhất. Đồng bào Nam Bắc nhất định sẽ sum họp một nhà”. Quan điểm trên của Người được thể hiện trong tác phẩm nào?",
    options: [
      "Di chúc (1969)",
      "Lời kêu gọi toàn quốc kháng chiến (1946)",
      "Tuyên ngôn Độc lập (1945)",
      "Đường cách mệnh (1927)"
    ],
    answer: 0
  },
  {
    id: 45,
    hasOfficialKey: false,
    question: "Theo quan điểm của Đảng ta, sự thất bại của Phong trào yêu nước (PTYN) cuối thế kỷ XIX, đầu thế kỷ XX phản ánh điều gì?",
    options: [
      "Sự khủng hoảng sâu sắc về đường lối cứu nước và giai cấp lãnh đạo",
      "Thiếu sự liên kết giữa các tỉnh thành trong cả nước",
      "Do ảnh hưởng của thiên tai và dịch bệnh kéo dài",
      "Do phong trào không có sự tham gia của tầng lớp sĩ phu"
    ],
    answer: 0
  },
  {
    id: 46,
    hasOfficialKey: false,
    question: "Theo quan điểm của Hồ Chí Minh, Cách mạng tư sản dân quyền ở Việt Nam trước hết tập trung giải quyết nhiệm vụ gì?",
    options: [
      "Chống đế quốc, giành độc lập dân tộc (giải phóng dân tộc)",
      "Xóa bỏ hoàn toàn chế độ tư hữu tư nhân",
      "Phát triển ngay công nghiệp nặng quy mô lớn",
      "Cải cách chữ viết và giáo dục đại học"
    ],
    answer: 0
  },
  {
    id: 47,
    hasOfficialKey: false,
    question: "Nội dung nào của Hồ Chí Minh được Đảng ta xác định là luận điểm quan trọng, có ý nghĩa bổ sung phát triển lý luận của chủ nghĩa Mác Lênin về Đảng cộng sản (ĐCSVN)?",
    options: [
      "Đảng Cộng sản Việt Nam ra đời là sự kết hợp chủ nghĩa Mác - Lênin với phong trào công nhân và phong trào yêu nước",
      "Đảng Cộng sản chỉ cần kết hợp chủ nghĩa Mác - Lênin với phong trào công nhân",
      "Đảng Cộng sản phải đứng ngoài mọi mặt trận dân tộc",
      "Đảng Cộng sản chỉ kết nạp thành viên thuộc giai cấp nông dân"
    ],
    answer: 0
  },
  {
    id: 48,
    hasOfficialKey: false,
    question: "Nội dung nào được coi là cơ sở để Hồ Chí Minh khẳng định: Cách mạng giải phóng dân tộc phải được tiến hành bằng phương pháp bạo lực cách mạng?",
    options: [
      "Bản chất cực kỳ phản động và tàn bạo của chủ nghĩa đế quốc thực dân dùng bạo lực để thống trị",
      "Truyền thống hiếu chiến của các triều đại phong kiến",
      "Sự thúc ép từ các nước đồng minh bên ngoài",
      "Nhân dân thuộc địa không có khả năng đấu tranh chính trị"
    ],
    answer: 0
  },
  {
    id: 49,
    hasOfficialKey: false,
    question: "Theo quan niệm của Hồ Chí Minh, giai đoạn chủ nghĩa xã hội và chủ nghĩa cộng sản giống nhau ở điểm nào?",
    options: [
      "Sức sản xuất đã phát triển cao; tư liệu sản xuất đều là của chung; không có giai cấp áp bức bóc lột",
      "Đều thực hiện phân phối theo nhu cầu hoàn toàn",
      "Đều còn tồn tại giai cấp bóc lột và nhà nước tư sản",
      "Đều chưa có nền công nghiệp hiện đại"
    ],
    answer: 0
  },
  {
    id: 50,
    hasOfficialKey: true,
    question: "Theo quan điểm của Hồ Chí Minh, tính tất yếu của chủ nghĩa xã hội do yếu tố nào quy định?",
    options: [
      "Do sự biến đổi và phát triển của cách sản xuất và sức sản xuất",
      "Do ý muốn chủ quan của một nhóm trí thức",
      "Do sự thỏa thuận giữa các nước đế quốc",
      "Do truyền thống văn hóa phong kiến để lại"
    ],
    answer: 0
  },
  {
    id: 51,
    hasOfficialKey: true,
    question: "Trong các động lực của chủ nghĩa xã hội, theo Hồ Chí Minh, động lực nào được xác định là mạnh nhất?",
    options: [
      "Đoàn kết toàn dân tộc",
      "Vốn đầu tư và kỹ thuật nước ngoài",
      "Tài nguyên thiên nhiên phong phú",
      "Hệ thống pháp luật hành chính"
    ],
    answer: 0
  },
  {
    id: 52,
    hasOfficialKey: true,
    question: "Nội dung nào được Hồ Chí Minh coi là nguyên tắc xây dựng chủ nghĩa xã hội trong thời kỳ quá độ ở Việt Nam?",
    options: [
      "Mọi tư tưởng và hành động phải được thực hiện trên nền tảng chủ nghĩa Mác - Lênin",
      "Phải giữ vững độc lập dân tộc; đoàn kết, học tập kinh nghiệm các nước anh em",
      "Xây phải đi đôi với chống",
      "Tất cả"
    ],
    answer: 3
  },
  {
    id: 53,
    hasOfficialKey: true,
    question: "Nội dung nào được Hồ Chí Minh coi là vấn đề có tính nguyên tắc trong hoạt động của Đảng?",
    options: [
      "Tập trung dân chủ; tập thể lãnh đạo, cá nhân phụ trách",
      "Tự phê bình và phê bình; kỷ luật nghiêm minh, tự giác",
      "Đoàn kết thống nhất trong Đảng; liên hệ mật thiết với nhân dân",
      "Tất cả"
    ],
    answer: 3
  },
  {
    id: 54,
    hasOfficialKey: true,
    question: "Hồ Chí Minh nhấn mạnh: “Đảng ………rất nghiêm, khác với các đảng phái khác và các hội quần chúng. Trong Đảng chỉ kết nạp những phần tử ………nhất, ………. nhất. Đảng có những điều kiện kỷ luật bắt buộc mỗi đảng viên phải theo. Không có kỷ luật sắt không có Đảng”. Tìm dãy chữ phù hợp với tư tưởng của Người.",
    options: [
      "Tổ chức - hăng hái - cách mạng",
      "Kỷ luật - ưu tú - tiên phong",
      "Lãnh đạo - tích cực - trung thành",
      "Xây dựng - xuất sắc - gương mẫu"
    ],
    answer: 0
  },
  {
    id: 55,
    hasOfficialKey: true,
    question: "Theo quan niệm của Hồ Chí Minh, vai trò của đại đoàn kết toàn dân tộc được phản ánh ở nội dung nào?",
    options: [
      "Là vấn đề có ý nghĩa chiến lược, quyết định thành công của cách mạng",
      "Là mục tiêu, nhiệm vụ hàng đầu của cách mạng Việt Nam",
      "Là nguồn sức mạnh, động lực chủ yếu của cách mạng",
      "Tất cả"
    ],
    answer: 3
  },
  {
    id: 56,
    hasOfficialKey: true,
    question: "Theo quan niệm của Hồ Chí Minh, nội dung nào được coi là điều kiện để thực hiện đại đoàn kết toàn dân tộc?",
    options: [
      "Phải có lòng khoan dung độ lượng với con người",
      "Phải xóa bỏ mọi sự khác biệt về nghề nghiệp trong xã hội",
      "Chỉ tập hợp những người có cùng tôn giáo",
      "Phải tách rời lợi ích cá nhân khỏi lợi ích dân tộc"
    ],
    answer: 0
  },
  {
    id: 57,
    hasOfficialKey: true,
    question: "Khi Mỹ ồ ạt đổ quân vào miền Nam, đánh phá miền Bắc với quy mô lớn và ác liệt, Hồ Chí Minh đã nêu lên chân lý: \"Không có gì quý hơn độc lập tự do\". Chân lý đó phản ánh nội dung nào về vấn đề dân tộc?",
    options: [
      "Độc lập tự do là quyền thiêng liêng, bất khả xâm phạm của tất cả các dân tộc",
      "Độc lập dân tộc chỉ có ý nghĩa trong thời chiến",
      "Tự do là quyền riêng của một số quốc gia phát triển",
      "Độc lập dân tộc có thể đánh đổi để lấy viện trợ kinh tế"
    ],
    answer: 0
  },
  {
    id: 58,
    hasOfficialKey: true,
    question: "Theo Hồ Chí Minh, với điều kiện nào các thành viên trong Mặt trận dân tộc thống nhất mới tự nguyện thừa nhận vai trò lãnh đạo của Đảng Cộng sản Việt Nam?",
    options: [
      "Khi Đảng Cộng sản tỏ ra trung thành nhất với lợi ích các thành viên trong Mặt trận",
      "Khi Đảng Cộng sản dùng mệnh lệnh hành chính bắt buộc",
      "Khi các thành viên không có tổ chức riêng",
      "Khi có sự chỉ định từ các tổ chức quốc tế"
    ],
    answer: 0
  },
  {
    id: 59,
    hasOfficialKey: true,
    question: "Theo quan niệm của Hồ Chí Minh, nội dung nào được coi là nguyên tắc của hiệp thương dân chủ?",
    options: [
      "Mọi vấn đề của Mặt trận đều được đem ra bàn bạc công khai để đi đến nhất trí",
      "Không áp đặt, lấy lợi ích chung của dân tộc làm điểm quy tụ",
      "Tôn trọng những điểm khác biệt không trái với lợi ích chung",
      "Tất cả"
    ],
    answer: 3
  },
  {
    id: 60,
    hasOfficialKey: true,
    question: "Theo quan niệm của Hồ Chí Minh, điểm tương đồng cơ bản giữa cách mạng Việt Nam với phong trào Cộng sản và công nhân quốc tế là gì?",
    options: [
      "Là có cùng mục tiêu độc lập dân tộc gắn liền với chủ nghĩa xã hội",
      "Là có cùng vị trí địa lý ở khu vực châu Á",
      "Là có cùng trình độ phát triển công nghiệp nặng",
      "Là có cùng ngôn ngữ và phong tục tập quán"
    ],
    answer: 0
  },
  {
    id: 61,
    hasOfficialKey: true,
    question: "Nội dung nào phản ánh điểm tương đồng cơ bản giữa cách mạng Việt Nam với cuộc cách mạng của các dân tộc thuộc địa, theo quan niệm Hồ Chí Minh?",
    options: [
      "Là có cùng mục tiêu độc lập, tự do và quyền bình đẳng dân tộc",
      "Là đều tiến hành cách mạng công nghiệp tư bản chủ nghĩa",
      "Là đều nằm dưới sự cai trị của cùng một nước chính quốc",
      "Là đều có nền kinh tế nông nghiệp phát triển hiện đại"
    ],
    answer: 0
  },
  {
    id: 62,
    hasOfficialKey: true,
    question: "Theo quan điểm của Hồ Chí Minh, trong các lực lượng quốc tế cần đoàn kết, lực lượng nào là nòng cốt?",
    options: [
      "Là phong trào cộng sản và công nhân quốc tế",
      "Các tổ chức tài chính quốc tế",
      "Các đảng phái bảo thủ ở châu Âu",
      "Liên minh các tập đoàn kinh tế tư nhân"
    ],
    answer: 0
  },
  {
    id: 63,
    hasOfficialKey: true,
    question: "Theo quan niệm của Hồ Chí Minh, nội dung cơ bản của đoàn kết quốc tế là gì?",
    options: [
      "Tìm kiếm những điểm tương đồng về mục tiêu và lợi ích giữa các dân tộc",
      "Kết hợp sức mạnh dân tộc với sức mạnh thời đại",
      "Thực hiện đoàn kết trên cơ sở tôn trọng độc lập, chủ quyền và bình đẳng",
      "Tất cả"
    ],
    answer: 3
  },
  {
    id: 64,
    hasOfficialKey: true,
    question: "Theo Hồ Chí Minh, thực hiện đoàn kết quốc tế nhằm đến mục tiêu gì?",
    options: [
      "Cùng nhân dân thế giới thực hiện thắng lợi các mục tiêu cách mạng của thời đại",
      "Mở rộng lãnh thổ ra các nước láng giềng",
      "Phụ thuộc hoàn toàn vào sự bảo hộ của các cường quốc",
      "Xây dựng một liên bang kinh tế khép kín"
    ],
    answer: 0
  },
  {
    id: 65,
    hasOfficialKey: true,
    question: "Theo Hồ Chí Minh cách mạng Việt Nam cần đoàn kết với lực lượng quốc tế nào?",
    options: [
      "Phong trào cộng sản và công nhân quốc tế",
      "Phong trào đấu tranh giải phóng dân tộc",
      "Các lực lượng tiến bộ, yêu chuộng hòa bình, dân chủ và công lý trên thế giới",
      "Tất cả"
    ],
    answer: 3
  },
  {
    id: 66,
    hasOfficialKey: true,
    question: "Vào thời gian nào, Hồ Chí Minh đã có quan điểm thành lập \"Mặt trận thống nhất của nhân dân chính quốc và thuộc địa\" để chống lại chủ nghĩa đế quốc?",
    options: [
      "Năm 1924",
      "Năm 1919",
      "Năm 1930",
      "Năm 1945"
    ],
    answer: 0
  },
  {
    id: 67,
    hasOfficialKey: true,
    question: "Theo quan niệm Hồ Chí Minh, điểm hội tụ giữa lí tưởng lớn của Đảng Cộng sản Việt Nam và dân tộc Việt Nam là gì?",
    options: [
      "Giành độc lập dân tộc đi lên chủ nghĩa xã hội",
      "Phát triển kinh tế thị trường tự do tư bản",
      "Duy trì chế độ quân chủ lập hiến",
      "Mở rộng giao thương hàng hải độc quyền"
    ],
    answer: 0
  },
  {
    id: 68,
    hasOfficialKey: true,
    question: "Theo quan niệm Hồ Chí Minh, người luôn tôn trọng của công, của dân là biểu hiện của phẩm chất đạo đức nào?",
    options: [
      "Liêm",
      "Cần",
      "Kiệm",
      "Chính"
    ],
    answer: 0
  },
  {
    id: 69,
    hasOfficialKey: true,
    question: "Theo quan niệm Hồ Chí Minh, người không tự cao, tự đại, tự phụ, là biểu hiện của phẩm chất nào?",
    options: [
      "Chính",
      "Cần",
      "Kiệm",
      "Liêm"
    ],
    answer: 0
  },
  {
    id: 70,
    hasOfficialKey: true,
    question: "Theo quan niệm Hồ Chí Minh, người thấy việc thiện dù nhỏ mấy cũng làm, thấy việc ác dù nhỏ mấy cũng tránh là biểu hiện của phẩm chất nào?",
    options: [
      "Chính",
      "Cần",
      "Kiệm",
      "Liêm"
    ],
    answer: 0
  },
  {
    id: 71,
    hasOfficialKey: true,
    question: "Theo Hồ Chí Minh, nguyên tắc nào khi người cán bộ công chức thực hiện tốt sẽ có giá trị hơn “100 bài diễn văn” tuyên truyền?",
    options: [
      "Nói đi đôi với làm",
      "Xây đi đôi với chống",
      "Tu dưỡng đạo đức suốt đời",
      "Phê bình và tự phê bình"
    ],
    answer: 0
  },
  {
    id: 72,
    hasOfficialKey: true,
    question: "Theo quan niệm Hồ Chí Minh, yếu tố nào là nền tảng cơ bản cho tài năng con người phát triển?",
    options: [
      "Phẩm chất đạo đức",
      "Điều kiện kinh tế gia đình",
      "Bằng cấp học thuật cao",
      "Quan hệ xã hội rộng rãi"
    ],
    answer: 0
  },
  {
    id: 73,
    hasOfficialKey: true,
    question: "Theo quan niệm Hồ Chí Minh, nội dung và phương pháp giáo dục phải toàn diện, song nội dung nào phải đặt lên vị trí hàng đầu?",
    options: [
      "Giáo dục đạo đức cách mạng",
      "Giáo dục kỹ năng thể chất",
      "Giáo dục ngoại ngữ và nghệ thuật",
      "Giáo dục kỹ thuật quân sự"
    ],
    answer: 0
  },
  {
    id: 74,
    hasOfficialKey: true,
    question: "Nội dung nào được Đảng ta xác định là giá trị cơ bản có tác động đến việc hình thành nên tư tưởng Hồ Chí Minh?",
    options: [
      "Chủ nghĩa Mác Lê nin",
      "Tư tưởng phong kiến bảo thủ",
      "Chủ nghĩa thực dân kiểu mới",
      "Chủ nghĩa cá nhân cực đoan"
    ],
    answer: 0
  },
  {
    id: 75,
    hasOfficialKey: true,
    question: "Sự kiện nào có ảnh hưởng đầu tiên và sâu sắc tới Hồ Chí Minh, trên hành trình Người đi tìm đường cứu nước?",
    options: [
      "Hồ Chí Minh đọc Luận cương dân tộc của Lê Nin",
      "Chiến thắng Điện Biên Phủ năm 1954",
      "Hội nghị Giơnevơ năm 1954",
      "Cách mạng Tháng Tám năm 1945"
    ],
    answer: 0
  },
  {
    id: 76,
    hasOfficialKey: true,
    question: "Theo quan điểm của Đảng ta, vào giai đoạn nào, tư tưởng của Hồ Chí Minh về cách mạng Việt Nam đã cơ bản hình thành?",
    options: [
      "Giai đoạn cuối 1920 đến 1930",
      "Giai đoạn 1911 đến 1920",
      "Giai đoạn 1930 đến 1941",
      "Giai đoạn 1945 đến 1969"
    ],
    answer: 0
  },
  {
    id: 77,
    hasOfficialKey: true,
    question: "Theo quan điểm của Đảng ta, tác phẩm nào được coi là sự chuẩn bị về chính trị, tư tưởng, tổ chức cho sự ra đời của Đảng Cộng sản Việt Nam?",
    options: [
      "“Đường Cách mệnh”",
      "“Bản án chế độ thực dân Pháp”",
      "“Nhật ký trong tù”",
      "“Di chúc”"
    ],
    answer: 0
  },
  {
    id: 78,
    hasOfficialKey: true,
    question: "Tại Hội nghị BCHTW lần thứ mấy, Hồ Chí Minh đã quyết định đặt nhiệm vụ giải phóng dân tộc lên hàng đầu?",
    options: [
      "Hội nghị BCHTW lần thứ 8",
      "Hội nghị BCHTW lần thứ 6",
      "Hội nghị BCHTW lần thứ 7",
      "Hội nghị BCHTW lần thứ 1"
    ],
    answer: 0
  },
  {
    id: 79,
    hasOfficialKey: true,
    question: "Nội dung nào là chủ trương mới được Hồ Chí Minh với tư cách là cán bộ của Quốc tế cộng sản nêu ra trong Hội nghị BCHTW 8, tháng 5/1941?",
    options: [
      "Thành lập Chính phủ nhân dân của nước Việt Nam Dân chủ Cộng hoà",
      "Thành lập Mặt trận Dân chủ Đông Dương",
      "Thành lập Hội Việt Nam Cách mạng Thanh niên",
      "Thực hiện ngay cải cách ruộng đất toàn diện"
    ],
    answer: 0
  },
  {
    id: 80,
    hasOfficialKey: true,
    question: "Nội dung chính của Bản yêu sách 8 điểm do Nguyễn Ái Quốc gửi đến Hội nghị Véc xay là gì?",
    options: [
      "Đòi quyền bình đẳng về pháp lý và quyền tự do, dân chủ cho nhân dân An Nam",
      "Đòi thành lập ngay quân đội riêng cho Đông Dương",
      "Đòi thực dân Pháp rút hết quân đội trong vòng 30 ngày",
      "Yêu cầu các cường quốc viện trợ vũ khí cho Việt Nam"
    ],
    answer: 0
  },
  {
    id: 81,
    hasOfficialKey: true,
    question: "Theo quan điểm của Hồ Chí Minh, con đường (tiến trình) cách mạng giải phóng dân tộc ở Việt Nam phát triển như thế nào?",
    options: [
      "Giải phóng dân tộc, giải phóng xã hội, giải phóng giai cấp, giải phóng con người",
      "Giải phóng giai cấp, giải phóng xã hội, giải phóng dân tộc, giải phóng con người",
      "Giải phóng con người, giải phóng giai cấp, giải phóng dân tộc, giải phóng xã hội",
      "Giải phóng xã hội, giải phóng dân tộc, giải phóng con người, giải phóng giai cấp"
    ],
    answer: 0
  },
  {
    id: 82,
    hasOfficialKey: true,
    question: "Phương hướng chiến lược của Cách mạng Việt Nam là “Làm tư sản dân quyền cách mạng và thổ địa cách mạng để đi tới xã hội cộng sản” được Hồ Chí Minh nêu ra, lần đầu tiên trong tác phẩm nào?",
    options: [
      "“Chánh cương vắn tắt của Đảng”",
      "“Đường cách mệnh”",
      "“Bản án chế độ thực dân Pháp”",
      "“Tuyên ngôn Độc lập”"
    ],
    answer: 0
  },
  {
    id: 83,
    hasOfficialKey: true,
    question: "Vai trò lãnh đạo của Đảng đối với cách mạng Việt Nam được Hồ Chí Minh thể hiện lần đầu tiên trong tác phẩm nào?",
    options: [
      "“Đường cách mệnh”",
      "“Chánh cương vắn tắt”",
      "“Sửa đổi lối làm việc”",
      "“Di chúc”"
    ],
    answer: 0
  },
  {
    id: 84,
    hasOfficialKey: true,
    question: "Nội dung nào được Hồ Chí Minh coi là vấn đề có tính nguyên tắc trong hoạt động của Đảng?",
    options: [
      "Tập trung dân chủ; tập thể lãnh đạo, cá nhân phụ trách",
      "Tự phê bình và phê bình; kỷ luật nghiêm minh, tự giác",
      "Đoàn kết thống nhất trong Đảng; liên hệ mật thiết với nhân dân",
      "Tất cả"
    ],
    answer: 3
  },
  {
    id: 85,
    hasOfficialKey: true,
    question: "Trong hoạt động của Đảng, nguyên tắc nào Hồ Chí Minh coi là việc làm thường xuyên “như mỗi ngày phải rửa mặt”?",
    options: [
      "Tự phê bình và phê bình",
      "Tập trung dân chủ",
      "Kỷ luật nghiêm minh",
      "Tập thể lãnh đạo"
    ],
    answer: 0
  },
  {
    id: 86,
    hasOfficialKey: true,
    question: "Theo quan điểm của Hồ Chí Minh, quyền lực của các cơ quan nhà nước, của những người cán bộ trong bộ máy nhà nước do ai ủy thác?",
    options: [
      "Do nhân dân ủy thác",
      "Do Quốc hội ban phát",
      "Do cấp trên trực tiếp bổ nhiệm tuyệt đối",
      "Do truyền thống lịch sử quy định"
    ],
    answer: 0
  },
  {
    id: 87,
    hasOfficialKey: true,
    question: "Theo quan điểm của Hồ Chí Minh, Mặt trận dân tộc thống nhất hoạt động theo nguyên tắc nào?",
    options: [
      "Hiệp thương dân chủ",
      "Tập trung quan liêu",
      "Đa số áp đặt thiểu số",
      "Mệnh lệnh hành chính"
    ],
    answer: 0
  },
  {
    id: 88,
    hasOfficialKey: true,
    question: "Quyền lãnh đạo của Đảng Cộng sản trong Mặt trận dân tộc thống nhất là do nhân tố nào quyết định?",
    options: [
      "Do nhân dân tự nguyện thừa nhận",
      "Do pháp luật cưỡng chế quy định",
      "Do các nước xã hội chủ nghĩa chỉ định",
      "Do sự thỏa thuận ngầm của các đảng phái"
    ],
    answer: 0
  },
  {
    id: 89,
    hasOfficialKey: true,
    question: "Theo Hồ Chí Minh nguyên tắc nào là cốt lõi trong chiến lược đại đoàn kết dân tộc?",
    options: [
      "Phải được xây dựng trên nền tảng liên minh công nhân - nông dân - trí thức, dưới sự lãnh đạo của Đảng",
      "Chỉ tập hợp giai cấp công nhân làm lực lượng duy nhất",
      "Không cần đến sự lãnh đạo của một chính đảng",
      "Ưu tiên liên minh với các tầng lớp tư sản nước ngoài"
    ],
    answer: 0
  },
  {
    id: 90,
    hasOfficialKey: true,
    question: "Theo quan niệm của Hồ Chí Minh, khi nào khối đại đoàn kết dân tộc mới thực sự bền chặt?",
    options: [
      "Khi được xây dựng trên nền tảng liên minh công - nông - trí thức dưới sự lãnh đạo của Đảng",
      "Khi thực hiện hiệp thương dân chủ, chân thành, tin cậy lẫn nhau",
      "Khi có mục tiêu chung là độc lập dân tộc gắn liền với tự do, hạnh phúc của nhân dân",
      "Tất cả"
    ],
    answer: 3
  },
  {
    id: 91,
    hasOfficialKey: true,
    question: "Theo quan niệm của Hồ Chí Minh, trong xã hội thuộc địa, để văn hóa phát triển tự do, trước hết phải làm gì?",
    options: [
      "Làm cách mạng giải phóng dân tộc",
      "Xây dựng nhiều trường học và thư viện",
      "Du nhập văn hóa phương Tây",
      "Cải cách chữ viết quốc ngữ"
    ],
    answer: 0
  },
  {
    id: 92,
    hasOfficialKey: true,
    question: "Theo quan niệm Hồ Chí Minh, nền giáo dục mới ở Việt Nam ra đời từ khi nào?",
    options: [
      "Khi Cách Mạng Tháng Tám thành công, 1945",
      "Khi thành lập Đảng Cộng sản Việt Nam, 1930",
      "Sau chiến thắng Điện Biên Phủ, 1954",
      "Khi đất nước thống nhất, 1975"
    ],
    answer: 0
  },
  {
    id: 93,
    hasOfficialKey: true,
    question: "Theo quan niệm Hồ Chí Minh, người làm việc có hiệu quả, năng suất cao, có tinh thần tự lực cánh sinh là biểu hiện của phẩm chất nào?",
    options: [
      "Cần",
      "Kiệm",
      "Liêm",
      "Chính"
    ],
    answer: 0
  },
  {
    id: 94,
    hasOfficialKey: true,
    question: "Khi Đảng Cộng sản trở thành Đảng cầm quyền, Hồ Chí Minh thường trăn trở nhất về điều gì?",
    options: [
      "Về hiện tượng Đảng viên xa rời quần chúng",
      "Về việc thiếu ngân sách chi tiêu hành chính",
      "Về số lượng đảng viên tăng quá chậm",
      "Về việc thiếu trụ sở làm việc của các cơ quan"
    ],
    answer: 0
  },
  {
    id: 95,
    hasOfficialKey: true,
    question: "Theo quan niệm Hồ Chí Minh, nếu không có phẩm chất này thì không thể “đi làm cách mạng, càng không thể nói đến chủ nghĩa xã hội, chủ nghĩa cộng sản”?",
    options: [
      "Tình yêu thương con người",
      "Trình độ ngoại ngữ giỏi",
      "Kinh nghiệm quản lý doanh nghiệp",
      "Khả năng diễn thuyết trước đám đông"
    ],
    answer: 0
  },
  {
    id: 96,
    hasOfficialKey: true,
    question: "Trong những nguyên tắc xây dựng đạo đức mới, nguyên tắc nào được Hồ Chí Minh coi là quan trọng nhất?",
    options: [
      "Nói đi đôi với làm, phải nêu gương đạo đức",
      "Chỉ học tập lý thuyết đạo đức trong sách vở",
      "Phê bình người khác thật nghiêm khắc",
      "Giữ gìn truyền thống gia đình khép kín"
    ],
    answer: 0
  },
  {
    id: 97,
    hasOfficialKey: true,
    question: "Theo quan niệm Hồ Chí Minh, để thực hiện “chiến lược trồng người” cần nhiều biện pháp, song quan trọng nhất là biện pháp nào?",
    options: [
      "Giáo dục và Đào tạo",
      "Tăng cường kỷ luật hành chính",
      "Phát triển thương mại dịch vụ",
      "Mở rộng giao lưu văn hóa nước ngoài"
    ],
    answer: 0
  },
  {
    id: 98,
    hasOfficialKey: true,
    question: "Theo quan niệm Hồ Chí Minh, người không nói dối người khác, không tự dối mình, nghiêm túc trong cuộc sống, trong thi cử là biểu hiện của phẩm chất nào?",
    options: [
      "Chính",
      "Cần",
      "Kiệm",
      "Liêm"
    ],
    answer: 0
  },
  {
    id: 99,
    hasOfficialKey: true,
    question: "Theo quan niệm Hồ Chí Minh, người luôn khiêm tốn học hỏi cái hay của người khác, phát triển cái hay và sửa chữa cái dở của mình là biểu hiện của phẩm chất nào?",
    options: [
      "Chính",
      "Cần",
      "Kiệm",
      "Liêm"
    ],
    answer: 0
  },
  {
    id: 100,
    hasOfficialKey: true,
    question: "Theo quan điểm của Hồ Chí Minh, Mặt trận dân tộc thống nhất hoạt động theo nguyên tắc nào?",
    options: [
      "Hiệp thương dân chủ",
      "Tập trung quyền lực tuyệt đối",
      "Bỏ phiếu kín bắt buộc",
      "Phân chia quyền lực theo địa phương"
    ],
    answer: 0
  },
  {
    id: 101,
    hasOfficialKey: true,
    question: "Tại Đại hội Đảng lần thứ mấy, Ban chấp hành trung ương Đảng Cộng sản Việt Nam đã tôn vinh Chủ Tịch Hồ Chí Minh là “Anh hùng dân tộc vĩ đại”?",
    options: [
      "Đại hội Đảng lần thứ IV",
      "Đại hội Đảng lần thứ III",
      "Đại hội Đảng lần thứ VI",
      "Đại hội Đảng lần thứ VII"
    ],
    answer: 0
  },
  {
    id: 102,
    hasOfficialKey: true,
    question: "Trong các giá trị truyền thống tốt đẹp của dân tộc Việt Nam, giá trị nào được Đảng ta xác định là nền tảng tư tưởng, là điểm xuất phát, là động lực thúc đẩy Hồ Chí Minh ra đi tìm đường cứu nước giải phóng dân tộc?",
    options: [
      "Truyền thống yêu nước",
      "Tinh thần hiếu học",
      "Truyền thống cần cù lao động",
      "Tinh thần lạc quan yêu đời"
    ],
    answer: 0
  },
  {
    id: 103,
    hasOfficialKey: true,
    question: "Sau hơn 30 năm bôn ba ở nước ngoài, vào thời gian nào, Hồ Chí Minh về nước trực tiếp chỉ đạo cách mạng Việt Nam?",
    options: [
      "Cuối tháng 1-1941",
      "Tháng 5-1941",
      "Tháng 8-1945",
      "Tháng 2-1930"
    ],
    answer: 0
  },
  {
    id: 104,
    hasOfficialKey: true,
    question: "Hồ Chí Minh sáng lập Hội Việt Nam Cách mạng Thanh niên, tổ chức tiền thân của Đảng Cộng sản Việt Nam vào thời gian nào, ở đâu?",
    options: [
      "Tháng 6 -1925 ở Trung Quốc",
      "Tháng 2 -1930 ở Hương Cảng",
      "Tháng 12 -1920 ở Pháp",
      "Tháng 5 -1941 ở Cao Bằng"
    ],
    answer: 0
  },
  {
    id: 105,
    hasOfficialKey: true,
    question: "Vào thời gian nào Hồ Chí Minh đã nêu ra phương hướng khởi nghĩa vũ trang giành chính quyền?",
    options: [
      "5/1941",
      "2/1930",
      "6/1925",
      "12/1944"
    ],
    answer: 0
  },
  {
    id: 106,
    hasOfficialKey: true,
    question: "Theo quan điểm của Đảng ta, sự kiện nào có tác động tới việc hình thành tư tưởng của Hồ Chí Minh về cách mạng Việt Nam?",
    options: [
      "Sự ra đời của Quốc tế Cộng sản do Lê Nin sáng lập",
      "Hội nghị Vécxây kết thúc thế chiến thứ nhất",
      "Sự ra đời của Hội Quốc Liên",
      "Cuộc khủng hoảng kinh tế thế giới 1929"
    ],
    answer: 0
  },
  {
    id: 107,
    hasOfficialKey: true,
    question: "Dựa trên cơ sở nào Hồ Chí Minh cho rằng cách mạng ở thuộc địa có vai trò rất lớn trong việc cùng với cách mạng vô sản ở chính quốc tiêu diệt chủ nghĩa đế quốc?",
    options: [
      "Tinh thần cách mạng ở các nước thuộc địa rất cao",
      "Các nước thuộc địa có nền công nghiệp phát triển hơn chính quốc",
      "Quân đội thực dân ở thuộc địa rất yếu ớt",
      "Các nước thuộc địa được chính quốc trao trả độc lập tự nguyện"
    ],
    answer: 0
  },
  {
    id: 108,
    hasOfficialKey: true,
    question: "Nội dung nào được Hồ Chí Minh xác định là điều kiện bảo đảm độc lập dân tộc gắn liền với chủ nghĩa xã hội?",
    options: [
      "Củng cố, tăng cường vai trò lãnh đạo của Đảng Cộng sản",
      "Tách rời hoàn toàn kinh tế trong nước với thế giới",
      "Duy trì lâu dài chế độ sở hữu phong kiến",
      "Chỉ phát triển nông nghiệp tự cung tự cấp"
    ],
    answer: 0
  },
  {
    id: 109,
    hasOfficialKey: true,
    question: "Theo quan niệm của Hồ Chí Minh, trong các quyền của dân tộc thuộc địa, trước hết phải được thể hiện ở quyền nào?",
    options: [
      "Bình đẳng và tự do",
      "Quyền tự do thương mại hàng hải",
      "Quyền sở hữu tài sản tư bản",
      "Quyền miễn thuế nhập khẩu"
    ],
    answer: 0
  },
  {
    id: 110,
    hasOfficialKey: true,
    question: "Nội dung nào không phải là quan điểm của Hồ Chí Minh, khi đề cập đến các yếu tố đảm bảo cho cách mạng giải phóng dân tộc ở Việt Nam đi đến thắng lợi?",
    options: [
      "Phải có sự giúp đỡ của tất cả các nước trên thế giới",
      "Phải có Đảng Cộng sản lãnh đạo",
      "Phải dựa trên lực lượng đại đoàn kết toàn dân tộc",
      "Phải tiến hành bằng con đường cách mạng bạo lực"
    ],
    answer: 0
  },
  {
    id: 111,
    hasOfficialKey: true,
    question: "Nội dung nào là quan điểm của Lênin về sự ra đời của Đảng Cộng sản?",
    options: [
      "Sự kết hợp chủ nghĩa Mác với phong trào công nhân",
      "Sự kết hợp chủ nghĩa Mác với phong trào nông dân",
      "Sự kết hợp chủ nghĩa Mác với phong trào trí thức",
      "Sự kết hợp chủ nghĩa Mác với phong trào yêu nước"
    ],
    answer: 0
  },
  {
    id: 112,
    hasOfficialKey: true,
    question: "Nội dung nào là quan điểm của HCM về sự ra đời của Đảng Cộng sản?",
    options: [
      "Là sự kết hợp chủ nghĩa Mác Lê nin với phong trào công nhân và phong trào yêu nước",
      "Là sự kết hợp chủ nghĩa Mác với phong trào công nhân",
      "Là sự kết hợp phong trào nông dân với phong trào trí thức",
      "Là sự kết hợp tư tưởng Nho giáo với phong trào công nhân"
    ],
    answer: 0
  },
  {
    id: 113,
    hasOfficialKey: true,
    question: "Vào thời gian và từ sự kiện nào Hồ Chí Minh khẳng định: \"Đảng ta là đạo đức, là văn minh\"?",
    options: [
      "Năm 1960, trong Lễ Kỷ niệm 30 năm Ngày thành lập Đảng",
      "Năm 1945, trong Tuyên ngôn Độc lập",
      "Năm 1951, tại Đại hội Đảng lần thứ II",
      "Năm 1969, trong Di chúc"
    ],
    answer: 0
  },
  {
    id: 114,
    hasOfficialKey: true,
    question: "Dựa theo quan điểm của Hồ Chí Minh, nội dung nào không phải là biểu hiện của bệnh quan liêu?",
    options: [
      "Không hoàn thành nhiệm vụ",
      "Xa rời thực tế, xa rời quần chúng nhân dân",
      "Chỉ biết dùng mệnh lệnh hành chính, giấy tờ",
      "Không kiểm tra, đôn đốc công việc sát sao"
    ],
    answer: 0
  },
  {
    id: 115,
    hasOfficialKey: true,
    question: "Dựa theo quan điểm của Hồ Chí Minh, nội dung nào không phải là nguyên tắc trong hoạt động của Đảng Cộng sản Việt Nam?",
    options: [
      "Phải biết dựa vào sức mạnh của Mặt trận",
      "Tập trung dân chủ",
      "Tự phê bình và phê bình",
      "Kỷ luật nghiêm minh, tự giác"
    ],
    answer: 0
  },
  {
    id: 116,
    hasOfficialKey: true,
    question: "Dựa theo quan điểm của Hồ Chí Minh, nội dung nào không phải là nguyên tắc trong hoạt động của Đảng Cộng sản Việt Nam?",
    options: [
      "Chiến lược lâu dài của cách mạng Việt Nam",
      "Tập thể lãnh đạo, cá nhân phụ trách",
      "Đoàn kết, thống nhất trong Đảng",
      "Đảng phải thường xuyên tự chỉnh đốn"
    ],
    answer: 0
  },
  {
    id: 117,
    hasOfficialKey: true,
    question: "Trong tư tưởng Hồ Chí Minh, mối quan hệ giữa Đảng Cộng sản Việt Nam với Mặt trận được xác định như thế nào?",
    options: [
      "Là mối quan hệ máu thịt",
      "Là mối quan hệ đối lập lợi ích",
      "Là mối quan hệ hành chính cấp trên - cấp dưới",
      "Là mối quan hệ tách rời độc lập"
    ],
    answer: 0
  },
  {
    id: 118,
    hasOfficialKey: true,
    question: "Theo Hồ Chí Minh yếu tố nào được Người xác định là “hạt nhân của nền tảng” của khối đại đoàn kết toàn dân tộc?",
    options: [
      "Sự đoàn kết, thống nhất trong Đảng",
      "Sự giúp đỡ của các nước anh em",
      "Sự phát triển của kinh tế tư nhân",
      "Hệ thống cơ quan hành chính nhà nước"
    ],
    answer: 0
  },
  {
    id: 119,
    hasOfficialKey: true,
    question: "Theo quan niệm của Hồ Chí Minh, sức mạnh dân tộc là sự tổng hợp của các yếu tố vật chất và tinh thần, song trước hết là sức mạnh của yếu tố nào?",
    options: [
      "Chủ nghĩa yêu nước",
      "Tiềm lực tài chính quốc gia",
      "Số lượng dân số đông đảo",
      "Vũ khí trang bị hiện đại"
    ],
    answer: 0
  },
  {
    id: 120,
    hasOfficialKey: true,
    question: "Theo Hồ Chí Minh, điểm tương đồng giữa cách mạng Việt Nam với các dân tộc trên thế giới là gì?",
    options: [
      "Cùng giương cao ngọn cờ độc lập, tự do và quyền bình đẳng dân tộc",
      "Cùng có chung đường biên giới lãnh thổ",
      "Cùng phát triển theo mô hình tư bản chủ nghĩa",
      "Cùng sử dụng chung một thể chế quân chủ"
    ],
    answer: 0
  },
  {
    id: 121,
    hasOfficialKey: true,
    question: "Hồ Chí Minh đưa ra khái niệm văn hóa vào thời gian nào?",
    options: [
      "Tháng 8-1943",
      "Tháng 9-1945",
      "Tháng 2-1930",
      "Tháng 5-1941"
    ],
    answer: 0
  },
  {
    id: 122,
    hasOfficialKey: true,
    question: "Theo quan niệm của Hồ Chí Minh, vị trí của văn hóa được đặt như thế nào trong mối quan hệ với kinh tế, chính trị và xã hội?",
    options: [
      "Đặt ngang với kinh tế, chính trị và xã hội",
      "Đặt dưới kinh tế và chính trị",
      "Đặt tách rời khỏi đời sống xã hội",
      "Chỉ là lĩnh vực phụ trợ sau khi phát triển kinh tế"
    ],
    answer: 0
  },
  {
    id: 123,
    hasOfficialKey: true,
    question: "Theo quan niệm Hồ Chí Minh, người cán bộ, Đảng viên muốn cho dân tin, dân phục phải có yếu tố cơ bản nào?",
    options: [
      "Tư cách đạo đức tốt",
      "Chức vụ quyền hạn thật cao",
      "Tài sản vật chất dồi dào",
      "Khả năng diễn thuyết hoa mỹ"
    ],
    answer: 0
  },
  {
    id: 124,
    hasOfficialKey: true,
    question: "Theo Hồ Chí Minh, khi người cán bộ công chức không gần dân, không tin dân sẽ dẫn đến căn “bệnh” nào?",
    options: [
      "Quan liêu",
      "Chủ quan duy ý chí",
      "Lãng phí thời gian",
      "Bảo thủ trì trệ"
    ],
    answer: 0
  },
  {
    id: 125,
    hasOfficialKey: true,
    question: "Theo quan niệm Hồ Chí Minh, yếu tố nào là nền tảng cơ bản cho tài năng con người phát triển?",
    options: [
      "Phẩm chất đạo đức",
      "Năng khiếu bẩm sinh",
      "Điều kiện vật chất đầy đủ",
      "Môi trường sống thành thị"
    ],
    answer: 0
  },
  {
    id: 126,
    hasOfficialKey: true,
    question: "Sau năm 1930, tư tưởng Hồ Chí Minh đã trải qua giai đoạn thử thách, phải đến Đại Hội Đảng lần thứ mấy, tư tưởng của Người mới được khẳng định trở lại?",
    options: [
      "Đại Hội Đảng lần thứ II, năm 1951",
      "Đại Hội Đảng lần thứ I, năm 1935",
      "Đại Hội Đảng lần thứ III, năm 1960",
      "Đại Hội Đảng lần thứ IV, năm 1976"
    ],
    answer: 0
  },
  {
    id: 127,
    hasOfficialKey: true,
    question: "Trên bình diện quốc tế, vào năm nào tổ chức Giáo dục – Khoa học & Văn hóa của Liên Hợp Quốc (UNESCO) đánh giá Hồ Chí Minh là “anh hùng giải phóng dân tộc, nhà văn hóa kiệt xuất của Việt Nam”?",
    options: [
      "Năm 1987",
      "Năm 1990",
      "Năm 1975",
      "Năm 1986"
    ],
    answer: 0
  },
  {
    id: 128,
    hasOfficialKey: true,
    question: "Nội dung chính của Bản yêu sách 8 điểm do Nguyễn Ái Quốc gửi đến hội nghị Vec xay là gì?",
    options: [
      "Đòi quyền bình đẳng về pháp lý và quyền tự do, dân chủ cho nhân dân An Nam",
      "Đòi chính phủ Pháp trao trả độc lập hoàn toàn ngay lập tức",
      "Đòi thành lập chính quyền Xô viết ở Đông Dương",
      "Đòi chia lại thuộc địa giữa các nước thắng trận"
    ],
    answer: 0
  },
  {
    id: 129,
    hasOfficialKey: true,
    question: "Theo quan điểm của Đảng ta, nguyên nhân trực tiếp làm cho các phong trào yêu nước ở Việt Nam cuối thế kỷ XIX đầu thế kỷ XX thất bại là gì?",
    options: [
      "Người lãnh đạo các phong trào yêu nước chưa có đường lối cách mạng đúng đắn",
      "Nhân dân ta chưa sẵn sàng tham gia đấu tranh",
      "Thực dân Pháp được tất cả các nước trên thế giới ủng hộ",
      "Điều kiện địa lý không thuận lợi cho chiến tranh du kích"
    ],
    answer: 0
  },
  {
    id: 130,
    hasOfficialKey: true,
    question: "Trên cơ sở nào Hồ Chí Minh khẳng định: \"Muốn cứu nước và giải phóng dân tộc không có con đường nào khác con đường cách mạng vô sản\"?",
    options: [
      "Đây là con đường cách mạng triệt để nhất",
      "Đây là con đường dễ thực hiện nhất và không cần đổ máu",
      "Đây là con đường được các nước tư bản phương Tây khuyến khích",
      "Đây là con đường duy nhất có sự hỗ trợ tài chính lớn"
    ],
    answer: 0
  },
  {
    id: 131,
    hasOfficialKey: true,
    question: "Theo quan điểm của Đảng ta, nguyên nhân nào Quốc tế Cộng sản và Đảng Cộng sản Việt Nam phê phán những tư tưởng mới mẻ, đúng đắn, sáng tạo của Nguyễn Ái Quốc trong Cương lĩnh chính trị đầu tiên là \"hữu khuynh\", là \"dân tộc chủ nghĩa\"?",
    options: [
      "Không nắm vững tình hình các dân tộc thuộc địa và Đông Dương",
      "Do bất đồng ngôn ngữ khi dịch văn kiện",
      "Do Nguyễn Ái Quốc chưa tham gia Quốc tế Cộng sản",
      "Do ảnh hưởng của phong trào cải lương tư sản ở châu Âu"
    ],
    answer: 0
  },
  {
    id: 132,
    hasOfficialKey: true,
    question: "Tại Hội nghị Ban Chấp hành Trung ương Đảng (5/1941) do Hồ Chí Minh chủ trì, Người đã đưa ra chủ trương gì?",
    options: [
      "Thành lập Chính phủ nhân dân của nước Việt Nam Dân chủ Cộng hoà",
      "Thành lập Đảng Cộng sản Đông Dương",
      "Phát động cuộc Tổng tiến công và nổi dậy Tết Mậu Thân",
      "Tiến hành cải cách ruộng đất trên toàn miền Bắc"
    ],
    answer: 0
  },
  {
    id: 133,
    hasOfficialKey: true,
    question: "Nội dung nào phản ánh cơ sở thực tiễn thế giới cuối thế kỷ XIX đầu XX có ảnh hưởng sâu sắc đến việc hình thành tư tưởng Hồ Chí Minh?",
    options: [
      "Chủ nghĩa tư bản chuyển sang giai đoạn Chủ nghĩa đế quốc",
      "Hệ thống xã hội chủ nghĩa thế giới đã hoàn toàn sụp đổ",
      "Cuộc cách mạng công nghiệp 4.0 bùng nổ mạnh mẽ",
      "Các nước thuộc địa ở châu Á đều đã giành được độc lập"
    ],
    answer: 0
  },
  {
    id: 134,
    hasOfficialKey: true,
    question: "Trong tác phẩm Bản án chế độ thực dân Pháp (1925), Hồ Chí Minh viết: “Chủ nghĩa tư bản là……”",
    options: [
      "Một con Đỉa",
      "Một con Hổ giấy",
      "Một ngọn núi lửa",
      "Một cỗ máy khổng lồ"
    ],
    answer: 0
  },
  {
    id: 135,
    hasOfficialKey: true,
    question: "Tháng 5-1941, tại Pác Bó, Cao Bằng, với tư cách là cán bộ Quốc tế Cộng sản, Hồ Chí Minh chủ trì Hội nghị Trung ương Đảng (5/1941). Hội nghị này Người đã đặt nhiệm vụ nào lên hàng đầu?",
    options: [
      "Giải phóng dân tộc",
      "Cách mạng ruộng đất",
      "Công nghiệp hóa xã hội chủ nghĩa",
      "Xây dựng kinh tế thị trường"
    ],
    answer: 0
  },
  {
    id: 136,
    hasOfficialKey: true,
    question: "Hồ Chí Minh đã phát triển những giá trị thiêng liêng, bất biến về quyền của các dân tộc trong Tuyên ngôn Độc lập của cách mạng Mỹ năm 1776, Tuyên ngôn Nhân quyền và Dân quyền của Cách mạng Pháp năm 1791, Người viết “Tất cả các dân tộc trên thế giới đều sinh ra ……, dân tộc nào cũng có …….., quyền …… và quyền ….... Đó là những lẽ phải không ai chối cãi được”. Tìm dãy chữ phù hợp với tư tưởng của Người.",
    options: [
      "Bình đẳng - quyền sống - sung sướng - tự do",
      "Tự do - bình đẳng - hạnh phúc - độc lập",
      "Độc lập - quyền sống - tự do - bình đẳng",
      "Bình đẳng - độc lập - tự do - mưu cầu hạnh phúc"
    ],
    answer: 0
  },
  {
    id: 137,
    hasOfficialKey: true,
    question: "Nội dung nào phản ánh quan điểm của Hồ Chí Minh về cách mạng giải phóng dân tộc?",
    options: [
      "Phải lấy liên minh Công - Nông làm nền tảng",
      "Phải dựa hoàn toàn vào giai cấp tư sản dân tộc",
      "Chỉ tiến hành bằng con đường đấu tranh nghị trường hòa bình",
      "Phải chờ cách mạng vô sản ở chính quốc thắng lợi trước"
    ],
    answer: 0
  },
  {
    id: 138,
    hasOfficialKey: true,
    question: "Dựa theo quan niệm của Hồ Chí Minh, nội dung nào không phải là mục tiêu về quan hệ xã hội trong quá trình xây dựng chủ nghĩa xã hội ở Việt Nam?",
    options: [
      "Phải xây dựng nền giáo dục hiện đại",
      "Bảo đảm dân chủ, công bằng, văn minh",
      "Mọi người đều có quyền làm việc, học tập và phát triển",
      "Xóa bỏ chế độ người bóc lột người"
    ],
    answer: 0
  },
  {
    id: 139,
    hasOfficialKey: true,
    question: "Hồ Chí Minh khẳng định: “Đồng bào Nam Bộ là dân nước Việt Nam. Sông có thể cạn, núi có thể mòn, song chân lý đó không bao giờ thay đổi”. Nội dung trên được Người thể hiện trong tác phẩm nào?",
    options: [
      "Thư gửi đồng bào Nam Bộ",
      "Tuyên ngôn Độc lập",
      "Lời kêu gọi toàn quốc kháng chiến",
      "Di chúc"
    ],
    answer: 0
  },
  {
    id: 140,
    hasOfficialKey: true,
    question: "Theo quan điểm của Mác và Ăngghen, cách mạng vô sản ở châu Âu đi theo con đường (tiến trình) nào?",
    options: [
      "Giải phóng giai cấp - Giải phóng dân tộc - Giải phóng xã hội - Giải phóng con người",
      "Giải phóng dân tộc - Giải phóng xã hội - Giải phóng giai cấp - Giải phóng con người",
      "Giải phóng con người - Giải phóng giai cấp - Giải phóng dân tộc - Giải phóng xã hội",
      "Giải phóng xã hội - Giải phóng giai cấp - Giải phóng con người - Giải phóng dân tộc"
    ],
    answer: 0
  },
  {
    id: 141,
    hasOfficialKey: true,
    question: "Hồ Chí Minh kế thừa và đổi mới tư tưởng nào của Phật Giáo?",
    options: [
      "Cứu chúng sinh ra khỏi khổ nạn",
      "Thuyết vô vi, không màng thế sự",
      "Chủ trương xuất thế, xa lánh cuộc đời",
      "Tư tưởng phân chia đẳng cấp xã hội"
    ],
    answer: 0
  },
  {
    id: 142,
    hasOfficialKey: true,
    question: "Nội dung nào không phải là quan niệm của Hồ Chí Minh khi nói về “Đảng văn minh”?",
    options: [
      "Phải có số lượng đông và tổ chức rộng rãi và chặt chẽ",
      "Đảng tiêu biểu cho lương tâm, trí tuệ và danh dự của dân tộc",
      "Đảng hoạt động trong khuôn khổ Hiến pháp và pháp luật",
      "Đội ngũ đảng viên phải là những chiến sĩ tiên phong, gương mẫu"
    ],
    answer: 0
  },
  {
    id: 143,
    hasOfficialKey: true,
    question: "Dựa theo quan điểm của Hồ Chí Minh, nội dung nào không phải là nguyên tắc trong hoạt động của Đảng?",
    options: [
      "Nói đi đôi với làm",
      "Tập trung dân chủ",
      "Tự phê bình và phê bình",
      "Kỷ luật nghiêm minh, tự giác"
    ],
    answer: 0
  },
  {
    id: 144,
    hasOfficialKey: true,
    question: "Theo quan điểm của Hồ Chí Minh, nội dung nào là nguyên tắc trong hoạt động của Đảng?",
    options: [
      "Tập trung dân chủ",
      "Phân quyền tuyệt đối cho địa phương",
      "Hoạt động tự phát theo phong trào",
      "Không cần kỷ luật tổ chức"
    ],
    answer: 0
  },
  {
    id: 145,
    hasOfficialKey: true,
    question: "Vào thời gian nào, từ khảo sát, so sánh nhiều học thuyết, nhiều chủ nghĩa, Hồ Chí Minh khẳng định: \"Bây giờ học thuyết nhiều, chủ nghĩa nhiều, nhưng chủ nghĩa chân chính nhất, chắc chắn nhất, cách mạng nhất là chủ nghĩa Lênin\"?",
    options: [
      "Cuối những năm 20 của thế kỷ XX",
      "Đầu những năm 40 của thế kỷ XX",
      "Những năm 50 của thế kỷ XX",
      "Cuối thế kỷ XIX"
    ],
    answer: 0
  },
  {
    id: 146,
    hasOfficialKey: true,
    question: "Hồ Chí Minh khẳng định: cách mạng trước hết phải có \"đảng cách mệnh, để trong thì vận động và tổ chức dân chúng, ngoài thì liên lạc với dân tộc bị áp bức và vô sản giai cấp ở mọi nơi. Đảng có vững, cách mệnh mới thành công, cũng như người cầm lái có vững thuyền mới chạy\". Luận điểm trên được Người thể hiện lần đầu tiên trong tác phẩm nào?",
    options: [
      "Đường cách mệnh",
      "Bản án chế độ thực dân Pháp",
      "Chánh cương vắn tắt",
      "Sửa đổi lối làm việc"
    ],
    answer: 0
  },
  {
    id: 147,
    hasOfficialKey: true,
    question: "Dựa theo quan điểm của Hồ Chí Minh, nội dung nào không phản ánh đạo đức của Đảng Cộng sản Việt Nam?",
    options: [
      "Đảng viên phải chiếm số lượng đông đảo trong dân cư",
      "Mục đích hoạt động của Đảng là lãnh đạo đấu tranh giải phóng dân tộc, giải phóng xã hội",
      "Đảng viên phải luôn trung thành với lợi ích của dân tộc và nhân dân",
      "Đảng không có mục đích tự thân, ngoài lợi ích của nhân dân không có lợi ích nào khác"
    ],
    answer: 0
  },
  {
    id: 148,
    hasOfficialKey: true,
    question: "Dựa theo quan điểm của Hồ Chí Minh, nội dung nào không phải là nguyên tắc trong hoạt động của Đảng Cộng sản Việt Nam?",
    options: [
      "Hiệp thương dân chủ",
      "Tập trung dân chủ",
      "Tập thể lãnh đạo, cá nhân phụ trách",
      "Tự phê bình và phê bình"
    ],
    answer: 0
  },
  {
    id: 149,
    hasOfficialKey: true,
    question: "Dựa theo quan điểm của Hồ Chí Minh, nội dung nào không phải là bản chất giai cấp công nhân của nhà nước ta - Nhà nước Việt Nam Dân chủ Cộng hòa?",
    options: [
      "Hoạt động của Nhà nước theo nguyên tắc đồng thuận với nhân dân",
      "Nhà nước do Đảng Cộng sản Việt Nam lãnh đạo",
      "Tính định hướng xã hội chủ nghĩa trong sự phát triển đất nước",
      "Nguyên tắc tổ chức và hoạt động của Nhà nước là tập trung dân chủ"
    ],
    answer: 0
  },
  {
    id: 150,
    hasOfficialKey: true,
    question: "Hồ Chí Minh xác định vị trí của Đảng Cộng sản Việt Nam trong Mặt trận dân tộc thống nhất như thế nào?",
    options: [
      "Đứng trong Mặt trận, lãnh đạo Mặt trận",
      "Đứng ngoài Mặt trận để giám sát",
      "Chỉ là một thành viên bình đẳng không có vai trò lãnh đạo",
      "Thay thế hoàn toàn vai trò của Mặt trận"
    ],
    answer: 0
  },
  {
    id: 151,
    hasOfficialKey: false,
    question: "Theo quan niệm của Hồ Chí Minh, trong các lực lượng đoàn kết quốc tế, lực lượng nào có vai trò đảm bảo vững chắc cho thắng lợi của chủ nghĩa cộng sản?",
    options: [
      "Phong trào cộng sản và công nhân quốc tế",
      "Các tổ chức phi chính phủ phương Tây",
      "Liên minh các nước tư bản phát triển",
      "Các hiệp hội thương mại khu vực"
    ],
    answer: 0
  },
  {
    id: 152,
    hasOfficialKey: false,
    question: "Theo quan niệm của Hồ Chí Minh, nền tảng của khối đại đoàn kết toàn dân tộc là?",
    options: [
      "Liên minh công nhân - nông dân - trí thức",
      "Liên minh tư sản - địa chủ - tiểu tư sản",
      "Tầng lớp trí thức và học sinh sinh viên",
      "Lực lượng vũ trang nhân dân"
    ],
    answer: 0
  },
  {
    id: 153,
    hasOfficialKey: false,
    question: "Nội dung nào không phải là lập trường giai cấp công nhân khi thực hiện nguyên tắc hiệp thương dân chủ?",
    options: [
      "Nhượng bộ vô nguyên tắc về mục tiêu độc lập dân tộc và chủ nghĩa xã hội",
      "Lấy lợi ích chung của dân tộc làm điểm quy tụ",
      "Tôn trọng những điểm khác biệt không trái với lợi ích chung",
      "Bàn bạc công khai, bình đẳng để đi đến nhất trí"
    ],
    answer: 0
  },
  {
    id: 154,
    hasOfficialKey: false,
    question: "Theo quan niệm của Hồ Chí Minh, nguyên tắc hiệp thương dân chủ được thể hiện ở nội dung nào?",
    options: [
      "Mọi vấn đề của Mặt trận đều được đem ra bàn bạc công khai để đi đến nhất trí, không áp đặt",
      "Đảng Cộng sản quyết định mọi việc bằng mệnh lệnh hành chính",
      "Các thành viên không được nêu ý kiến khác biệt",
      "Chỉ lấy ý kiến của một số cá nhân đứng đầu"
    ],
    answer: 0
  },
  {
    id: 155,
    hasOfficialKey: false,
    question: "Nội dung nào không phải là quan điểm của Hồ Chí Minh khi bàn về điều kiện để cả dân tộc hay toàn dân trở thành lực lượng to lớn, có sức mạnh vô địch?",
    options: [
      "Chỉ cần tập hợp tầng lớp trí thức, không cần vận động quần chúng lao động",
      "Phải được giác ngộ, tổ chức và lãnh đạo theo đường lối đúng đắn",
      "Phải có sự đoàn kết chặt chẽ trên nền tảng liên minh công - nông - trí thức",
      "Phải có lòng khoan dung, độ lượng và tin vào sức mạnh của nhân dân"
    ],
    answer: 0
  },
  {
    id: 156,
    hasOfficialKey: false,
    question: "Để khơi dậy sức mạnh và quyền tự quyết của mỗi dân tộc, Hồ Chí Minh đã chỉ đạo thành lập Mặt trận Việt Nam Độc lập đồng minh (gọi tắt là Việt Minh) vào thời gian nào?",
    options: [
      "Tháng 5/1941",
      "Tháng 2/1930",
      "Tháng 8/1945",
      "Tháng 3/1951"
    ],
    answer: 0
  },
  {
    id: 157,
    hasOfficialKey: false,
    question: "Mục tiêu chung nhất của các thành viên trong Mặt trận dân tộc thống nhất là gì?",
    options: [
      "Độc lập dân tộc, thống nhất Tổ quốc, tự do và hạnh phúc cho nhân dân",
      "Phát triển kinh tế tư bản chủ nghĩa ở thuộc địa",
      "Bảo vệ đặc quyền của giai cấp địa chủ phong kiến",
      "Xóa bỏ hoàn toàn sự khác biệt về tôn giáo"
    ],
    answer: 0
  },
  {
    id: 158,
    hasOfficialKey: false,
    question: "Hồ Chí Minh viết: “Có đạo đức cách mạng thì khi gặp ……., gian khổ,........cũng không….....rụt rè lùi bước. Khi gặp thuận lợi thành công cũng giữ được tinh thần gian khổ, chất phát, khiêm tốn”. Tìm dãy chữ phù hợp với tư tưởng của Người.",
    options: [
      "khó khăn - thất bại - sợ sệt",
      "thử thách - nguy hiểm - dao động",
      "gian nan - mất mát - chùn bước",
      "trở ngại - thiếu thốn - ngần ngại"
    ],
    answer: 0
  },
  {
    id: 159,
    hasOfficialKey: false,
    question: "Theo quan điểm của Đảng ta, đặc trưng cốt lõi nhất của tư tưởng đạo đức Hồ Chí Minh là gì?",
    options: [
      "Chủ nghĩa nhân đạo chiến đấu (tình yêu thương con người, trung với nước, hiếu với dân)",
      "Lòng trung thành tuyệt đối với lễ giáo phong kiến",
      "Tư tưởng tu thân ẩn dật xa rời xã hội",
      "Đề cao lợi ích cá nhân trên hết"
    ],
    answer: 0
  },
  {
    id: 160,
    hasOfficialKey: false,
    question: "Theo quan niệm Hồ Chí Minh, nội dung và phương pháp giáo dục phải toàn diện, song nội dung nào phải đặt lên vị trí hàng đầu?",
    options: [
      "Giáo dục đạo đức cách mạng",
      "Giáo dục thể chất và quân sự",
      "Giáo dục nghệ thuật và âm nhạc",
      "Giáo dục kỹ năng thương mại"
    ],
    answer: 0
  },
  {
    id: 161,
    hasOfficialKey: false,
    question: "Nội dung nào không phải là quan niệm của Hồ Chí Minh khi bàn về nguyên tắc xây dựng đạo đức cách mạng?",
    options: [
      "Chỉ cần học tập lý thuyết trong sách vở, không cần rèn luyện trong thực tiễn",
      "Nói đi đôi với làm, phải nêu gương về đạo đức",
      "Xây đi đôi với chống",
      "Phải tu dưỡng đạo đức suốt đời"
    ],
    answer: 0
  },
  {
    id: 162,
    hasOfficialKey: false,
    question: "Hồ Chí Minh viết: “Không tham địa vị. Không tham tiền tài. Không tham sung sướng. Không ham người tâng bốc mình. Vì vậy mà quang minh chính đại, không bao giờ hủ hóa. Chỉ có một thứ ham là ham học, ham làm, ham tiến bộ”. Theo quan niệm của Người nội dung trên phản ánh phẩm chất nào?",
    options: [
      "Liêm",
      "Cần",
      "Kiệm",
      "Dũng"
    ],
    answer: 0
  },
  {
    id: 163,
    hasOfficialKey: false,
    question: "Theo Hồ Chí Minh, trong đời sống có bốn vấn đề phải được coi là quan trọng ngang nhau và có sự tác động lẫn nhau, đó là chính trị, kinh tế, văn hóa, xã hội. Nhưng ở nước Việt Nam thuộc địa thì trước hết phải tiến hành nhiệm vụ gì?",
    options: [
      "Giải phóng dân tộc (làm cách mạng chính trị giành độc lập)",
      "Phát triển kinh tế công nghiệp nặng",
      "Cải cách toàn bộ nền văn hóa truyền thống",
      "Xây dựng hệ thống an sinh xã hội hiện đại"
    ],
    answer: 0
  },
  {
    id: 164,
    hasOfficialKey: false,
    question: "Bối cảnh đặc biệt xuất hiện khái niệm văn hóa của Hồ Chí Minh?",
    options: [
      "Trong nhà tù của Tưởng Giới Thạch ở Quảng Tây, Trung Quốc (tháng 8/1943)",
      "Tại Đại hội Đảng toàn quốc lần thứ II (1951)",
      "Tại Hội nghị Vécxây ở Pháp (1919)",
      "Tại chiến khu Việt Bắc trong kháng chiến chống Pháp (1947)"
    ],
    answer: 0
  },
  {
    id: 165,
    hasOfficialKey: false,
    question: "Nội dung nào không phải là quan điểm của Hồ Chí Minh khi bàn về hình thức bản sắc văn hóa của một dân tộc?",
    options: [
      "Bắt chước hoàn toàn văn hóa ngoại lai, xóa bỏ truyền thống dân tộc",
      "Thể hiện qua ngôn ngữ, phong tục, tập quán, lễ hội truyền thống",
      "Phải giữ gìn cốt cách dân tộc đồng thời tiếp thu tinh hoa văn hóa nhân loại",
      "Gắn liền với lịch sử dựng nước và giữ nước của dân tộc"
    ],
    answer: 0
  },
  {
    id: 166,
    hasOfficialKey: false,
    question: "Tổng kết kinh nghiệm thắng lợi của cách mạng Việt Nam, Hồ Chí Minh khẳng định: “Chúng tôi giành được thắng lợi đó trước hết là nhờ cái vũ khí không gì thay thế được là:……”",
    options: [
      "Chủ nghĩa Mác - Lênin",
      "Vũ khí hiện đại của các nước đồng minh",
      "Tiềm lực kinh tế dồi dào",
      "Sự ủng hộ của các nước tư bản"
    ],
    answer: 0
  },
  {
    id: 167,
    hasOfficialKey: false,
    question: "Theo quan điểm của Đảng ta, từ sự kiện nào Hồ Chí Minh trở thành người tham gia sáng lập Đảng Cộng sản Pháp?",
    options: [
      "Đại hội lần thứ XVIII của Đảng Xã hội Pháp tại Tua (tháng 12/1920)",
      "Hội nghị Vécxây (tháng 6/1919)",
      "Đại hội V Quốc tế Cộng sản (1924)",
      "Hội nghị thành lập Đảng Cộng sản Việt Nam (1930)"
    ],
    answer: 0
  },
  {
    id: 168,
    hasOfficialKey: false,
    question: "Nội dung tư tưởng nào của Nho giáo được Hồ Chí Minh chú ý kế thừa và đổi mới?",
    options: [
      "Triết lý hành động, tư tưởng nhập thế, tu thân dưỡng tính, đề cao lễ nghĩa và hiếu học",
      "Tư tưởng trọng nam khinh nữ và phân chia đẳng cấp khắt khe",
      "Chủ trương bảo thủ, khép kín, không tiếp thu cái mới",
      "Thuyết thần quyền tuyệt đối của vua chúa"
    ],
    answer: 0
  },
  {
    id: 169,
    hasOfficialKey: false,
    question: "Nội dung nào không phải là tư tưởng của Hồ Chí Minh khi nói về Yêu sách nhằm cải cách nền pháp lý ở Đông Dương?",
    options: [
      "Duy trì chế độ cai trị bằng sắc lệnh toàn quyền thực dân",
      "Xóa bỏ các tòa án đặc biệt dùng làm công cụ khủng bố nhân dân",
      "Bảo đảm quyền bình đẳng về mặt pháp lý giữa người An Nam và người châu Âu",
      "Thay thế chế độ ra các sắc lệnh bằng chế độ ra các đạo luật"
    ],
    answer: 0
  },
  {
    id: 170,
    hasOfficialKey: false,
    question: "Trong hành trình tìm đường cứu nước, sự kiện nào phản ánh khát vọng của Hồ Chí Minh: Độc lập dân tộc phải là “quyền thiêng liêng, bất khả xâm phạm của tất cả các dân tộc”?",
    options: [
      "Gửi Bản yêu sách 8 điểm của nhân dân An Nam tới Hội nghị Vécxây (1919)",
      "Tham gia viết báo Người cùng khổ ở Pháp",
      "Đi làm phụ bếp trên tàu Đô đốc Latouche-Tréville (1911)",
      "Tham gia sáng lập Hội Liên hiệp thuộc địa (1921)"
    ],
    answer: 0
  },
  {
    id: 171,
    hasOfficialKey: false,
    question: "Từ sự kiện nào cho thấy Hồ Chí Minh sớm thấy được tầm quan trọng của Hiến pháp và pháp luật?",
    options: [
      "Gửi Bản yêu sách 8 điểm (1919) đòi cải cách pháp lý và ban hành hiến pháp cho Đông Dương",
      "Viết tác phẩm Nhật ký trong tù (1942)",
      "Thành lập Đội Việt Nam Tuyên truyền Giải phóng quân (1944)",
      "Kêu gọi toàn quốc kháng chiến (1946)"
    ],
    answer: 0
  },
  {
    id: 172,
    hasOfficialKey: false,
    question: "Nội dung nào phản ánh quan điểm của Hồ Chí Minh: tiến lên chủ nghĩa xã hội là một tất yếu khách quan?",
    options: [
      "Là quy luật phát triển tất yếu của lịch sử xã hội loài người phù hợp với khát vọng của nhân dân lao động",
      "Là sự áp đặt chủ quan từ bên ngoài đối với Việt Nam",
      "Chỉ là một khẩu hiệu tuyên truyền trong thời chiến",
      "Là mô hình chỉ phù hợp với các nước công nghiệp phát triển"
    ],
    answer: 0
  },
  {
    id: 173,
    hasOfficialKey: false,
    question: "Hồ Chí Minh viết về mục tiêu của đấu tranh cách mạng là: “Làm cho nước Nam được hoàn toàn độc lập, dân chúng được tự do...thủ tiêu hết các thứ quốc trái...thâu hết ruộng đất của đế quốc chủ nghĩa làm của công, chia cho dân cày nghèo. Bỏ sưu thuế cho dân cày nghèo...thi hành luật ngày làm 8 giờ”. Nội dung trên lần đầu tiên được Người thể hiện trong tác phẩm nào?",
    options: [
      "Chánh cương vắn tắt của Đảng (1930)",
      "Đường cách mệnh (1927)",
      "Bản án chế độ thực dân Pháp (1925)",
      "Tuyên ngôn Độc lập (1945)"
    ],
    answer: 0
  },
  {
    id: 174,
    hasOfficialKey: false,
    question: "Nội dung nào phản ánh quan điểm của Hồ Chí Minh về tính tất yếu và vai trò lãnh đạo của Đảng Cộng sản Việt Nam?",
    options: [
      "Cách mạng trước hết phải có Đảng cách mệnh để vận động, tổ chức dân chúng và liên lạc với quốc tế",
      "Đảng chỉ cần đóng vai trò tư vấn sau khi nhân dân tự giành chính quyền",
      "Quần chúng nhân dân có thể tự phát đi đến thắng lợi mà không cần Đảng",
      "Vai trò lãnh đạo của Đảng chỉ cần thiết trong giai đoạn kháng chiến"
    ],
    answer: 0
  },
  {
    id: 175,
    hasOfficialKey: false,
    question: "Từ phân tích, khảo sát, so sánh các học thuyết, các cuộc cách mạng xã hội, Hồ Chí Minh cho rằng để cách mạng Việt Nam đi đến thành công cần phải...?",
    options: [
      "Đi theo con đường cách mạng vô sản, có Đảng Cộng sản lãnh đạo và thực hiện đại đoàn kết dân tộc",
      "Đi theo con đường cách mạng tư sản kiểu Mỹ hoặc Pháp",
      "Cầu viện sự giúp đỡ quân sự từ triều đình phong kiến phương Đông",
      "Thực hiện cải lương ôn hòa trong khuôn khổ thuộc địa"
    ],
    answer: 0
  },
  {
    id: 176,
    hasOfficialKey: false,
    question: "Nội dung nào phản ánh bản chất giai cấp công nhân của nhà nước ta - Nhà nước Việt Nam Dân chủ Cộng hòa?",
    options: [
      "Do Đảng Cộng sản Việt Nam lãnh đạo, định hướng XHCN và tổ chức theo nguyên tắc tập trung dân chủ",
      "Chỉ tuyển dụng công nhân vào làm việc trong bộ máy hành chính",
      "Hoạt động theo mô hình nhà nước quân chủ lập hiến",
      "Không cần sự tham gia quản lý của nông dân và trí thức"
    ],
    answer: 0
  },
  {
    id: 177,
    hasOfficialKey: false,
    question: "Nội dung nào không phải là quan điểm của Hồ Chí Minh khi bàn về bản chất giai cấp công nhân của Nhà nước ta thống nhất với tính nhân dân và tính dân tộc?",
    options: [
      "Nhà nước chỉ bảo vệ lợi ích riêng của giai cấp công nhân, bỏ qua lợi ích các tầng lớp khác",
      "Nhà nước ra đời là kết quả đấu tranh lâu dài của toàn thể dân tộc Việt Nam",
      "Nhà nước luôn bảo vệ lợi ích của nhân dân, lấy lợi ích dân tộc làm tối cao",
      "Nhà nước tổ chức nhân dân thực hiện các nhiệm vụ giải phóng và xây dựng đất nước"
    ],
    answer: 0
  },
  {
    id: 178,
    hasOfficialKey: false,
    question: "Nội dung nào không phải là tư tưởng của Hồ Chí Minh khi Người nói về thước đo của Nhà nước vì dân?",
    options: [
      "Cán bộ nhà nước được hưởng đặc quyền, đặc lợi đứng trên nhân dân",
      "Việc gì có lợi cho dân phải hết sức làm, việc gì có hại cho dân phải hết sức tránh",
      "Cán bộ nhà nước vừa là người lãnh đạo, vừa là người đầy tớ thật trung thành của nhân dân",
      "Nhà nước chăm lo đời sống vật chất và tinh thần của nhân dân"
    ],
    answer: 0
  },
  {
    id: 179,
    hasOfficialKey: false,
    question: "Nội dung nào không phải là quan điểm của Hồ Chí Minh khi nói về “Nhà nước Pháp quyền nhân nghĩa”?",
    options: [
      "Dùng pháp luật hà khắc để trừng trị nhân dân thay vì giáo dục, cảm hóa",
      "Tôn trọng, bảo đảm thực hiện đầy đủ các quyền con người, quyền công dân",
      "Pháp luật có tính nhân văn, khuyến thiện, nghiêm minh nhưng khoan hồng",
      "Mọi người đều bình đẳng trước pháp luật"
    ],
    answer: 0
  },
  {
    id: 180,
    hasOfficialKey: false,
    question: "Nội dung nào không phải là quan điểm của Hồ Chí Minh khi bàn về tính nhân văn trong Nhà nước pháp quyền nhân nghĩa?",
    options: [
      "Duy trì hình phạt tàn khốc, không khoan hồng với người biết hối cải",
      "Chú trọng giáo dục, cảm hóa để người phạm lỗi trở thành người có ích",
      "Nghiêm minh nhưng công bằng, không oan sai",
      "Bảo vệ quyền lợi chính đáng của người lao động và mọi công dân"
    ],
    answer: 0
  },
  {
    id: 181,
    hasOfficialKey: false,
    question: "Nội dung nào phản ánh quan điểm của Hồ Chí Minh về vai trò quan trọng của Đại đoàn kết toàn dân tộc?",
    options: [
      "Là vấn đề có ý nghĩa chiến lược, quyết định thành công của cách mạng",
      "Chỉ là biện pháp sách lược tạm thời trong một giai đoạn ngắn",
      "Chỉ cần thiết trong chiến tranh, không cần thiết trong hòa bình",
      "Chỉ đóng vai trò thứ yếu sau sự viện trợ quốc tế"
    ],
    answer: 0
  },
  {
    id: 182,
    hasOfficialKey: false,
    question: "Nội dung nào không phải là quan điểm của Hồ Chí Minh khi nói về vai trò quan trọng của Đại đoàn kết toàn dân tộc?",
    options: [
      "Đại đoàn kết chỉ là thủ đoạn chính trị nhất thời trong giai đoạn khó khăn",
      "Đại đoàn kết là mục tiêu, nhiệm vụ hàng đầu của cách mạng Việt Nam",
      "Đại đoàn kết là nguồn sức mạnh, động lực chủ yếu của cách mạng",
      "Đoàn kết, đoàn kết, đại đoàn kết; Thành công, thành công, đại thành công"
    ],
    answer: 0
  },
  {
    id: 183,
    hasOfficialKey: false,
    question: "Dựa theo quan điểm của Hồ Chí Minh, nội dung nào không phải là lực lượng của khối đại đoàn kết toàn dân tộc?",
    options: [
      "Những phần tử phản quốc, làm tay sai cho đế quốc thực dân xâm lược",
      "Công nhân, nông dân, trí thức và các tầng lớp nhân dân lao động",
      "Đồng bào các dân tộc thiểu số và các tôn giáo yêu nước",
      "Kiều bào Việt Nam ở nước ngoài hướng về Tổ quốc"
    ],
    answer: 0
  },
  {
    id: 184,
    hasOfficialKey: false,
    question: "Theo Hồ Chí Minh điểm tương đồng giữa cách mạng Việt Nam với các lực lượng tiến bộ trên thế giới là gì?",
    options: [
      "Cùng mục tiêu đấu tranh vì hòa bình, độc lập dân tộc, dân chủ và tiến bộ xã hội",
      "Cùng có chung hệ thống chính trị và ngôn ngữ",
      "Cùng theo đuổi lợi ích kinh tế độc quyền",
      "Cùng nằm trong một liên minh quân sự"
    ],
    answer: 0
  },
  {
    id: 185,
    hasOfficialKey: false,
    question: "Theo quan niệm của Hồ Chí Minh, điều kiện nào được Người xác định là bất di bất dịch, là ngọn cờ, là mẫu số chung để quy tụ mọi lực lượng trong dân tộc vào trong Mặt trận?",
    options: [
      "Độc lập, tự do và thống nhất Tổ quốc",
      "Xóa bỏ hoàn toàn mọi tôn giáo và tín ngưỡng",
      "Thống nhất một nghề nghiệp duy nhất cho toàn dân",
      "Chia đều tài sản tư nhân cho mọi thành viên"
    ],
    answer: 0
  },
  {
    id: 186,
    hasOfficialKey: false,
    question: "Theo quan điểm của Hồ Chí Minh, nội dung nào được Người xác định là nguyên tắc trong quá trình xây dựng nền đạo đức cách mạng?",
    options: [
      "Nói đi đôi với làm, nêu gương đạo đức; xây đi đôi với chống; tu dưỡng suốt đời",
      "Chỉ cần giữ đạo đức trong gia đình, không cần trong xã hội",
      "Rèn luyện đạo đức chỉ dành riêng cho cán bộ cấp cao",
      "Đạo đức là bẩm sinh, không cần phải rèn luyện hằng ngày"
    ],
    answer: 0
  },
  {
    id: 187,
    hasOfficialKey: false,
    question: "Theo quan niệm của Hồ Chí Minh, người hoàn toàn vì lợi ích chung, không chút thiên tư, thiên vị, luôn công tâm, luôn đặt lợi ích của Đảng, của nhân dân, của dân tộc lên trên hết là biểu hiện của phẩm chất nào?",
    options: [
      "Chí công vô tư",
      "Cần",
      "Kiệm",
      "Liêm"
    ],
    answer: 0
  },
  {
    id: 188,
    hasOfficialKey: false,
    question: "Theo quan niệm của Hồ Chí Minh người không tham địa vị, tiền tài, không tham danh – lợi, không ham người khác tâng bốc mình là biểu hiện của phẩm chất nào?",
    options: [
      "Liêm",
      "Cần",
      "Kiệm",
      "Chính"
    ],
    answer: 0
  },
  {
    id: 189,
    hasOfficialKey: false,
    question: "Vào thời gian nào, Hồ Chí Minh tuyên bố chính sách đối ngoại của Việt Nam là: “làm bạn với tất cả mọi nước dân chủ và không gây thù oán với một ai”?",
    options: [
      "Năm 1947",
      "Năm 1930",
      "Năm 1954",
      "Năm 1969"
    ],
    answer: 0
  },
  {
    id: 190,
    hasOfficialKey: true,
    question: "Tại Đại hội Đảng lần thứ mấy, Đảng ta không chỉ khẳng định tư tưởng Hồ Chí Minh là tài sản tinh thần vô cùng to lớn và quý giá của Đảng và dân tộc, mà còn khẳng định: tư tưởng Hồ Chí Minh “mãi mãi soi đường cho sự nghiệp cách mạng của nhân dân ta giành thắng lợi”?",
    options: [
      "Đại hội Đảng lần thứ XI",
      "Đại hội Đảng lần thứ VII",
      "Đại hội Đảng lần thứ IX",
      "Đại hội Đảng lần thứ X"
    ],
    answer: 0
  },
  {
    id: 191,
    hasOfficialKey: true,
    question: "Nội dung nào không phải là quan niệm của Hồ Chí Minh khi bàn về vấn đề “trồng người”?",
    options: [
      "Phải được tiến hành trên nền tảng liên minh công nông dưới sự lãnh đạo của Đảng",
      "Vì lợi ích trăm năm thì phải trồng người",
      "Trồng người là yêu cầu khách quan, vừa cấp bách, vừa lâu dài của cách mạng",
      "Muốn xây dựng chủ nghĩa xã hội, trước hết cần có những con người xã hội chủ nghĩa"
    ],
    answer: 0
  },
  {
    id: 192,
    hasOfficialKey: true,
    question: "Theo quan điểm của Đảng ta, những thử thách lớn đối với Hồ Chí Minh xuất hiện không chỉ từ phía kẻ thù, mà còn từ một số người trong tổ chức nào?",
    options: [
      "Quốc tế Cộng sản và Đảng Cộng sản Đông Dương",
      "Hội Liên hiệp thuộc địa",
      "Mặt trận Việt Minh",
      "Đảng Xã hội Pháp"
    ],
    answer: 0
  },
  {
    id: 193,
    hasOfficialKey: true,
    question: "Ảnh hưởng cuộc cách mạng của nước nào, phong trào yêu nước Việt Nam cuối thế kỷ XIX đầu thế kỷ XX chuyển từ khuynh hướng phong kiến sang khuynh hướng dân chủ tư sản?",
    options: [
      "Cách mạng dân chủ tư sản ở Trung Quốc",
      "Cách mạng Tháng Mười Nga",
      "Cách mạng công nghiệp ở Anh",
      "Cách mạng giải phóng dân tộc ở Ấn Độ"
    ],
    answer: 0
  },
  {
    id: 194,
    hasOfficialKey: true,
    question: "Theo quan điểm của Hồ Chí Minh, phương hướng chiến lược của cách mạng Việt Nam đi theo tiến trình nào?",
    options: [
      "Làm tư sản dân quyền cách mạng - thổ địa cách mạng - đi tới xã hội Cộng sản",
      "Làm cách mạng vô sản - thổ địa cách mạng - tư sản dân quyền cách mạng",
      "Làm thổ địa cách mạng - tư sản dân quyền cách mạng - chủ nghĩa tư bản",
      "Làm cách mạng công nghiệp - cách mạng văn hóa - xã hội Cộng sản"
    ],
    answer: 0
  },
  {
    id: 195,
    hasOfficialKey: true,
    question: "Dựa theo quan điểm của Hồ Chí Minh, nội dung nào không phải là một trong những yêu cầu chủ yếu để xây dựng đội ngũ cán bộ, đảng viên?",
    options: [
      "Phải có lòng khoan dung độ lượng với con người",
      "Phải tuyệt đối trung thành với Đảng, với Tổ quốc và nhân dân",
      "Phải thường xuyên tu dưỡng, rèn luyện đạo đức cách mạng, cần kiệm liêm chính",
      "Phải có năng lực chuyên môn và gắn bó mật thiết với quần chúng"
    ],
    answer: 0
  },
  {
    id: 196,
    hasOfficialKey: true,
    question: "Nội dung nào không phải là quan điểm của Hồ Chí Minh khi nói về biểu hiện của bệnh quan liêu?",
    options: [
      "Không thực hiện tốt các chủ trương, chính sách của Đảng",
      "Xa rời thực tế, không sát dân, không lắng nghe ý kiến nhân dân",
      "Làm việc theo lối giấy tờ, mệnh lệnh, cửa quyền",
      "Thờ ơ, vô cảm trước khó khăn, bức xúc của quần chúng"
    ],
    answer: 0
  },
  {
    id: 197,
    hasOfficialKey: true,
    question: "Dựa theo quan niệm của Hồ Chí Minh, nội dung nào không phải là nguyên tắc xây dựng đạo đức cách mạng?",
    options: [
      "Kết hợp lý luận với thực tiễn",
      "Nói đi đôi với làm, phải nêu gương về đạo đức",
      "Xây đi đôi với chống",
      "Tu dưỡng đạo đức suốt đời"
    ],
    answer: 0
  },
  {
    id: 198,
    hasOfficialKey: true,
    question: "Theo Hồ Chí Minh điểm tương đồng giữa cách mạng Việt Nam với phong trào cộng sản và công nhân quốc tế là gì?",
    options: [
      "Cùng giương cao ngọn cờ độc lập dân tộc gắn liền với chủ nghĩa xã hội",
      "Cùng có chung nền văn hóa phương Đông",
      "Cùng xuất phát từ các nước công nghiệp phát triển",
      "Cùng tiến hành đấu tranh nghị trường ôn hòa"
    ],
    answer: 0
  },
  {
    id: 199,
    hasOfficialKey: true,
    question: "Hồ Chí Minh đã kế thừa và phát triển tư tưởng “Cần, kiệm, liêm, chính, chí công vô tư” của tôn giáo nào?",
    options: [
      "Lão giáo",
      "Phật giáo",
      "Thiên Chúa giáo",
      "Hồi giáo"
    ],
    answer: 0
  },
  {
    id: 200,
    hasOfficialKey: true,
    question: "Hồ Chí Minh tổng kết: “Đạo đức cách mạng không phải trên trời sa xuống. Nó do đấu tranh, rèn luyện bền bỉ hằng ngày mà phát triển và củng cố. Cũng như ngọc càng mài càng sáng, vàng càng luyện càng trong\". Nội dung trên phản ánh nguyên tắc nào trong quá trình xây dựng đạo đức cách mạng?",
    options: [
      "Tu dưỡng đạo đức suốt đời",
      "Nói đi đôi với làm",
      "Xây đi đôi với chống",
      "Tự phê bình và phê bình"
    ],
    answer: 0
  }
];
