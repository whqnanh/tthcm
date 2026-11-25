const RAW_DATA = [
  {
    "id": 1,
    "question": "Sự kiện nào được Đảng ta đánh giá là “Mở ra con đường giải phóng cho các dân tộc bị áp bức trên thế giới”?",
    "answer": null
  },
  {
    "id": 2,
    "question": "Tinh thần yêu nước, thương dân và nhân cách phẩm chất tốt đẹp của ai đã có ảnh hưởng sâu sắc đến tư tưởng, nhân cách của Hồ Chí Minh thuở thiếu thời?",
    "answer": null
  },
  {
    "id": 3,
    "question": "Từ sự kiện nào, Hồ Chí Minh lấy tên Nguyễn Ái Quốc?",
    "answer": null
  },
  {
    "id": 4,
    "question": "Tác phẩm Đường cách mệnh của Hồ Chí Minh, lần đầu tiên được xuất bản ở nước nào?",
    "answer": null
  },
  {
    "id": 5,
    "question": "Theo quan niệm của Đảng ta, vào thời kỳ nào Hồ Chí Minh đã vượt qua thử thách, giữ vững đường lối và phương pháp cách mạng đúng đắn, sáng tạo của mình?",
    "answer": null
  },
  {
    "id": 6,
    "question": "Nội dung nào là tư tưởng của Hồ Chí Minh về độc lập dân tộc?",
    "answer": null
  },
  {
    "id": 7,
    "question": "Tư tưởng Hồ Chí Minh về quyền của các dân tộc thuộc địa lần đầu tiên được phản ánh trong sự kiện nào?",
    "answer": null
  },
  {
    "id": 8,
    "question": "Theo quan điểm của Đảng ta, sự thất bại của Phong trào yêu nước (PTYN) cuối thế kỷ XIX, đầu thế kỷ XX phản ánh điều gì?",
    "answer": null
  },
  {
    "id": 9,
    "question": "Theo quan điểm Hồ Chí Minh, Đảng Cộng sản Việt Nam có vai trò như thế nào?",
    "answer": null
  },
  {
    "id": 10,
    "question": "Hồ Chí Minh viết về vai trò của Công nhân, Nông dân trong Cách mạng Việt Nam: “lòng cách mệnh càng ………, chí cách mệnh càng …..…. công nông là tay không chân rồi, nếu..……. thì chỉ mất một cái kiếp khổ, nếu ….…. thì được cả thế giới, cho nên họ gan góc”. Tìm dãy chữ phù hợp với tư tưởng của Người",
    "answer": null
  },
  {
    "id": 11,
    "question": "Hồ Chí Minh quan niệm: “Sự đoàn kết ………. lực lượng các nước xã hội chủ nghĩa và sự đoàn kết ……… các Đảng Cộng sản và công nhân …….. các nước có ý nghĩa quan trọng bậc nhất”. Tìm dãy chữ phù hợp với tư tưởng của Người?",
    "answer": null
  },
  {
    "id": 12,
    "question": "Nội dung nào là quan niệm của Hồ Chí Minh về mối quan hệ giữa độc lập dân tộc và chủ nghĩa xã hội (CNXH)?",
    "answer": null
  },
  {
    "id": 13,
    "question": "Hồ Chí Minh nhấn mạnh: “Mỗi đảng viên và cán bộ phải thật sự thấm nhuần đạo đức cách mạng, thật sự cần kiệm, liêm chính, chí công vô tư. Phải ….... Đảng ta thật ........ phải ……. là người lãnh đạo, là người đầy tớ thật trung thành của nhân dân”. Tìm dãy chữ phù hợp với tư tưởng của Người",
    "answer": null
  },
  {
    "id": 14,
    "question": "Trong các hoạt động của Đảng, nguyên tắc nào được Hồ Chí Minh coi là “thang thuốc” tốt nhất để làm cho phần tốt trong mỗi tổ chức và mỗi con người nẩy nở như hoa mùa xuân, phần xấu mất dần đi?",
    "answer": null
  },
  {
    "id": 15,
    "question": "Hồ Chí Minh viết: “Nhờ đoàn kết chặt chẽ, một lòng một dạ phục vụ …….., phục vụ nhân dân, phục vụ ………., cho nên từ ngày thành lập đến nay, Đảng ta đã đoàn kết, tổ chức lãnh đạo nhân dân ta hăng hái đấu tranh tiến từ thắng lợi này đến thắng lợi khác. Đoàn kết là một truyền thống cực kỳ quý báu của ……… và của ………. ta.”. Tìm dãy chữ phù hợp với tư tưởng của Người",
    "answer": null
  },
  {
    "id": 16,
    "question": "Theo quan niệm của Hồ Chí Minh, bản chất giai cấp công nhân của Nhà nước Việt Nam thể hiện ở nội dung nào?",
    "answer": null
  },
  {
    "id": 17,
    "question": "Theo quan niệm của Hồ Chí Minh, để chiến thắng đế quốc, thực dân, giải phóng dân tộc, ngoài tinh thần yêu nước còn cần đến yếu tố cơ bản nào?",
    "answer": null
  },
  {
    "id": 18,
    "question": "Theo Hồ Chí Minh, đoàn kết trong Mặt trận nào đã góp phần làm nên thắng lợi Cách mạng tháng 8/1945?",
    "answer": null
  },
  {
    "id": 19,
    "question": "Hồ Chí Minh viết: \"Đoàn kết .......... nghĩa là mục đích phải .......... và lập trường cũng phải .......... Đoàn kết .......... nghĩa là vừa đoàn kết vừa đấu tranh\". Tìm dãy chữ phù hợp với tư tưởng của Người",
    "answer": null
  },
  {
    "id": 20,
    "question": "Theo quan điểm của Hồ Chí Minh, điểm tương đồng giữa các giai cấp ở Việt Nam (nông dân, công nhân, trí thức hay địa chủ, tư sản,...) là gì?",
    "answer": null
  },
  {
    "id": 21,
    "question": "Theo Hồ Chí Minh, thực hiện đoàn kết quốc tế nhằm mục đích gì? Đáp án: d",
    "answer": null
  },
  {
    "id": 22,
    "question": "Hồ Chí Minh đã đưa ra định nghĩa văn hóa lần đầu tiên vào năm nào, ở đâu",
    "answer": null
  },
  {
    "id": 23,
    "question": "Theo quan niệm Hồ Chí Minh, sức hấp dẫn của chủ nghĩa xã hội trước hết là nhờ vào yếu tố nào?",
    "answer": null
  },
  {
    "id": 24,
    "question": "Hồ Chí Minh viết: “ Đối với một quốc gia, cần, kiệm, liêm, chính, là..........sự giàu có về vật chất, vững mạnh về tinh thần, là.........sự văn minh tiến bộ, là........của đời sống mới”. Tìm dãy chữ phù hợp với tư tưởng của Người",
    "answer": null
  },
  {
    "id": 25,
    "question": "Theo quan niệm Hồ Chí Minh, để đánh giá đạo đức của một con người phải dựa vào yếu tố nào?",
    "answer": null
  },
  {
    "id": 26,
    "question": "Hồ Chí Minh viết: “ Thanh niên là người.........cách mạng cho thế hệ thanh niên.........đồng thời là người phụ trách……...thế hệ thanh niên........” Tìm dãy chữ phù hợp với tư tưởng của Người",
    "answer": null
  },
  {
    "id": 27,
    "question": "Tại Đại hội Đảng lần thứ mấy, lần đầu tiên Đảng ta khẳng định tư tưởng Hồ Chí Minh cũng là nền tảng tư tưởng, kim chỉ nam cho hoạt động của Đảng ta?",
    "answer": null
  },
  {
    "id": 28,
    "question": "Sự kiện nào có ảnh hưởng sâu sắc tới Hồ Chí Minh trên hành trình Người đi tìm đường cứu  nước?",
    "answer": null
  },
  {
    "id": 29,
    "question": "HCM trịnh trọng tuyên bố với thế giới: “Nước Việt Nam có quyền hưởng tự do và độc lập, và sự thật đã thành một nước tự do và độc lập. Toàn thể dân tộc Việt Nam quyết đem tất cả ……. và ...….., …….. và của cải để giữ vững quyền tự do và độc lập ấy”. Hãy tìm dãy chữ phù hợp với tư tưởng của Người",
    "answer": null
  },
  {
    "id": 30,
    "question": "Trong quá trình tìm đường cứu nước và quá trình lãnh đạo cách mạng Việt Nam, Hồ Chí Minh đã kế thừa và phát triển sáng tạo quan điểm nào của Tôn Trung Sơn?",
    "answer": null
  },
  {
    "id": 31,
    "question": "Theo quan điểm của Đảng ta, sự tác động của nhân tố nào có ý nghĩa quyết định bước phát triển về chất trong tư tưởng Hồ Chí Minh?",
    "answer": null
  },
  {
    "id": 32,
    "question": "Hồ Chí Minh đánh giá Chủ nghĩa Tam Dân của Tôn Trung Sơn có ưu điểm gì?",
    "answer": null
  },
  {
    "id": 33,
    "question": "Theo quan điểm của Đảng ta, từ cơ sở nào giúp Hồ Chí Minh có hiểu biết sâu sắc về phong trào giải phóng dân tộc, về xây dựng chủ nghĩa xã hội, về xây dựng Đảng?",
    "answer": null
  },
  {
    "id": 34,
    "question": "Theo quan điểm của Đảng ta, tác phẩm nào thể hiện được nội dung cốt lõi tư tưởng  Hồ Chí Minh về đường lối, phương pháp của cách mạng Việt Nam?",
    "answer": null
  },
  {
    "id": 35,
    "question": "Hồ Chí Minh viết:…“Trong lúc này quyền lợi của bộ phận, của ……. phải đặt dưới sự sinh tử, tồn vong của quốc gia, của ……. Trong lúc này, nếu không giải quyết được vấn đề dân tộc giải phóng, không đòi được độc lập, tự do cho toàn thể dân tộc, thì chẳng những toàn thể ……dân tộc còn chịu mãi kiếp ngựa trâu, mà quyền lợi của ……, giai cấp đến vạn năm cũng không đòi lại được”. Tìm dãy chữ phù hợp với tư tưởng của Người",
    "answer": null
  },
  {
    "id": 36,
    "question": "Với tư cách là cán bộ của Quốc tế cộng sản, Hồ Chí Minh chủ trì hội nghị BCHTW 8, tháng 5/1941 đã chủ trương xóa bỏ vấn đề gì?",
    "answer": null
  },
  {
    "id": 37,
    "question": "Hồ Chí Minh, với tư cách là cán bộ của Quốc tế cộng sản, khi chủ trì hội nghị BCHTW 8, tháng 5/1941, đã chủ trương tạm gác vấn đề gì?",
    "answer": null
  },
  {
    "id": 38,
    "question": "Cách mạng tháng 8/1945 thành công, giành lại độc lập dân tộc trực tiếp từ tay kẻ thù nào?",
    "answer": null
  },
  {
    "id": 39,
    "question": "Sự kiện nào được Đảng ta đánh giá là mốc mở ra thời kỳ sụp đổ của hệ thống thuộc địa kiểu cũ trên phạm vi thế giới?",
    "answer": null
  },
  {
    "id": 40,
    "question": "Vào thời gian nào, Hồ Chí Minh ra lời kêu gọi đồng bào và chiến sỹ cả nước, trong đó nêu lên một chân lý lớn của thời đại “Không có gì quý hơn độc lập, tự do”?",
    "answer": null
  },
  {
    "id": 41,
    "question": "Theo quan điểm của Đảng ta, nội dung nào phản ánh giá trị tư tưởng Hồ Chí Minh đối với cách mạng Việt Nam?",
    "answer": null
  },
  {
    "id": 42,
    "question": "Trong quá trình bôn ba tìm đường cứu nước, Hồ Chí Minh góp phần sáng lập ra Đảng Cộng sản nào ?",
    "answer": null
  },
  {
    "id": 43,
    "question": "Từ sự kiện nào Hồ Chí Minh đã ký tên Nguyễn Ái Quốc vào Bản yêu sách 8 điểm và gửi tới hội nghị các cường quốc họp tại Vecxay?",
    "answer": null
  },
  {
    "id": 44,
    "question": "Hồ Chí Minh viết: “Dù khó khăn gian khổ đến mấy, nhân dân ta nhất định sẽ hoàn toàn thắng lợi. Đế quốc Mỹ nhất định phải cút khỏi nước ta. Tổ quốc ta nhất định sẽ thống nhất. Đồng bào Nam Bắc nhất định sẽ sum họp một nhà”. Quan điểm trên của Người được thể hiện trong tác phẩm nào?",
    "answer": null
  },
  {
    "id": 45,
    "question": "Theo quan điểm của Đảng ta, sự thất bại của Phong trào yêu nước (PTYN) cuối thế kỷ XIX, đầu thế kỷ XX phản ánh điều gì?",
    "answer": null
  },
  {
    "id": 46,
    "question": "Theo quan điểm của Hồ Chí Minh, Cách mạng tư sản dân quyền ở Việt Nam trước hết tập trung giải quyết nhiệm vụ gì?",
    "answer": null
  },
  {
    "id": 47,
    "question": "Nội dung nào của Hồ Chí Minh được Đảng ta xác định là luận điểm quan trọng, có ý nghĩa bổ sung phát triển lý luận của chủ nghĩa Mác Lê nin về Đảng cộng sản (ĐCSVN)?",
    "answer": null
  },
  {
    "id": 48,
    "question": "Nội dung nào được coi là cơ sở để Hồ Chí Minh khẳng định: Cách mạng giải phóng dân tộc phải được tiến hành bằng phương pháp bạo lực cách mạng ?",
    "answer": null
  },
  {
    "id": 49,
    "question": "Theo quan niệm của Hồ Chí Minh, giai đoạn chủ nghĩa xã hội và chủ nghĩa cộng sản giống nhau ở điểm nào ?",
    "answer": null
  },
  {
    "id": 50,
    "question": "Theo quan điểm của Hồ Chí Minh, tính tất yếu của chủ nghĩa xã hội do yếu tố nào quy định?",
    "answer": "Do sự biến đổi và phát triển của cách sản xuất và sức sản xuất"
  },
  {
    "id": 51,
    "question": "Trong các động lực của chủ nghĩa xã hội, theo Hồ Chí Minh, động lực nào được xác định là mạnh nhất?",
    "answer": "Đoàn kết toàn dân tộc."
  },
  {
    "id": 52,
    "question": "Nội dung nào được Hồ Chí Minh coi là nguyên tắc xây dựng chủ nghĩa xã hội trong thời kỳ quá độ ở Việt Nam?",
    "answer": "Tất cả"
  },
  {
    "id": 53,
    "question": "Nội dung nào được Hồ Chí Minh coi là vấn đề có tính nguyên tắc trong hoạt động của Đảng?",
    "answer": "Tất cả"
  },
  {
    "id": 54,
    "question": "Hồ Chí Minh nhấn mạnh: “Đảng ………rất nghiêm, khác với các đảng phải khác và các hội quần chúng. Trong Đảng chỉ kết nạp những phần tử ………nhất, ………. nhất. Đảng có những điều kiện kỷ luật bắt buộc mỗi đảng viên phải theo. Không có kỷ luật sắt không có Đảng”. Tìm dãy chữ phù hợp với tư tưởng của Người",
    "answer": "Tổ chức - hăng hái - cách mạng"
  },
  {
    "id": 55,
    "question": "Theo quan niệm của Hồ Chí Minh, vai trò của đại đoàn kết toàn dân tộc được phản ánh ở nội dung nào?",
    "answer": "Tất cả"
  },
  {
    "id": 56,
    "question": "Theo quan niệm của Hồ Chí Minh, nội dung nào được coi là điều kiện để thực hiện đại đoàn kết toàn dân tộc?",
    "answer": "Phải có lòng khoan dung độ lượng với con người"
  },
  {
    "id": 57,
    "question": "Khi Mỹ ồ ạt đổ quân vào miền Nam, đánh phá miền Bắc với quy mô lớn và ác liệt, Hồ Chí Minh đã nêu lên chân lý: \"Không có gì quý hơn độc lập tự do\". Chân lý đó phản ánh nội dung nào về vấn đề dân tộc?",
    "answer": "Độc lập tự do là quyền thiêng liêng, bất khả xâm phạm của tất cả các dân tộc"
  },
  {
    "id": 58,
    "question": "Theo Hồ Chí Minh, với điều kiện nào các thành viên trong Mặt trận dân tộc thống nhất mới tự nguyện thừa nhận vai trò lãnh đạo của Đảng Cộng sản Việt Nam?",
    "answer": "Khi Đảng Cộng sản tỏ ra trung thành nhất với lợi ích các thành viên trong Mặt trận"
  },
  {
    "id": 59,
    "question": "Theo quan niệm của Hồ Chí Minh, nội dung nào được coi là nguyên tắc của hiệp thương dân chủ?",
    "answer": "Tất cả"
  },
  {
    "id": 60,
    "question": "Theo quan niệm của Hồ Chí Minh, điểm tương đồng cơ bản giữa cách mạng Việt Nam với phong trào Cộng sản và công nhân quốc tế là gì?",
    "answer": "Là có cùng mục tiêu độc lập dân tộc gắn liền với chủ nghĩa xã hội"
  },
  {
    "id": 61,
    "question": "Nội dung nào phản ánh điểm tương đồng cơ bản giữa cách mạng Việt Nam với cuộc cách mạng của các dân tộc thuộc địa, theo quan niệm Hồ Chí Minh?",
    "answer": "Là có cùng mục tiêu độc lập, tự do và quyền bình đẳng dân tộc"
  },
  {
    "id": 62,
    "question": "Theo quan điểm của Hồ Chí Minh, trong các lực lượng quốc tế cần đoàn kết, lực lượng nào là nòng cốt?",
    "answer": "Là phong trào cộng sản và công nhân quốc tế"
  },
  {
    "id": 63,
    "question": "Theo quan niệm của Hồ Chí Minh, nội dung cơ bản của đoàn kết quốc tế là gì?",
    "answer": "Tất cả"
  },
  {
    "id": 64,
    "question": "Theo Hồ Chí Minh, thực hiện đoàn kết quốc tế nhằm đến mục tiêu gì?",
    "answer": "Cùng nhân dân thế giới thực hiện thắng lợi các mục tiêu cách mạng của thời đại"
  },
  {
    "id": 65,
    "question": "Theo Hồ Chí Minh cách mạng Việt Nam cần đoàn kết với lực lượng quốc tế nào?",
    "answer": "Tất cả"
  },
  {
    "id": 66,
    "question": "Vào thời gian nào, Hồ Chí Minh đã có quan điểm thành lập \"Mặt trận thống nhất của nhân dân chính quốc và thuộc địa\" để chống lại chủ nghĩa đế quốc?",
    "answer": "Năm 1924"
  },
  {
    "id": 67,
    "question": "Theo quan niệm Hồ Chí Minh, điểm hội tụ giữa lí tưởng lớn của Đảng Cộng sản Việt Nam và dân tộc Việt Nam là gì?",
    "answer": "Giành độc lập dân tộc đi lên chủ nghĩa xã hội"
  },
  {
    "id": 68,
    "question": "Theo quan niệm Hồ Chí Minh, người luôn tôn trọng của công, của dân là biểu hiện của phẩm chất đạo đức nào?",
    "answer": "Liêm"
  },
  {
    "id": 69,
    "question": "Theo quan niệm Hồ Chí Minh, người không tự cao, tự đại, tự phụ, là biểu hiện của phẩm chất nào?",
    "answer": "Chính"
  },
  {
    "id": 70,
    "question": "Theo quan niệm Hồ Chí Minh, người thấy việc thiện dù nhỏ mấy cũng làm, thấy việc ác dù nhỏ mấy cũng tránh là biểu hiện của phẩm chất nào?",
    "answer": "Chính"
  },
  {
    "id": 71,
    "question": "Theo Hồ Chí Minh, nguyên tắc nào khi người cán bộ công chức thực hiện tốt sẽ có giá trị hơn “100 bài diễn văn” tuyên truyền?",
    "answer": "Nói đi đôi với làm"
  },
  {
    "id": 72,
    "question": "Theo quan niệm Hồ Chí Minh, yếu tố nào là nền tảng cơ bản cho tài năng con người phát triển?",
    "answer": "Phẩm chất đạo đức"
  },
  {
    "id": 73,
    "question": "Theo quan niệm Hồ Chí Minh, nội dung và phương pháp giáo dục phải toàn diện, song nội dung nào phải đặt lên vị trí hàng đầu?",
    "answer": "Giáo dục đạo đức cách mạng"
  },
  {
    "id": 74,
    "question": "Nội dung nào được Đảng ta xác định là giá trị cơ bản có tác động đến việc hình thành nên tư tưởng Hồ Chí Minh?",
    "answer": "Chủ nghĩa Mác Lê nin"
  },
  {
    "id": 75,
    "question": "Sự kiện nào có ảnh hưởng đầu tiên và sâu sắc tới Hồ Chí Minh, trên hành trình Người đi tìm đường cứu nước?",
    "answer": "Hồ Chí Minh đọc Luận cương dân tộc của Lê Nin"
  },
  {
    "id": 76,
    "question": "Theo quan điểm của Đảng ta, vào giai đoạn nào, tư tưởng của Hồ Chí Minh về cách mang Việt Nam đã cơ bản hình thành?",
    "answer": "Giai đoạn cuối 1920 đến 1930"
  },
  {
    "id": 77,
    "question": "Theo quan điểm của Đảng ta, tác phẩm nào được coi là sự chuẩn bị về chính trị, tư tưởng, tổ chức cho sự ra đời của Đảng Cộng sản Việt Nam?",
    "answer": "“Đường Cách mệnh”"
  },
  {
    "id": 78,
    "question": "Tại Hội nghị BCHTW lần thứ mấy, Hồ Chí Minh đã quyết định đặt nhiệm vụ giải phóng dân tộc lên hàng đầu?",
    "answer": "Hội nghị BCHTW lần thứ 8"
  },
  {
    "id": 79,
    "question": "Nội dung nào là chủ trương mới được Hồ Chí Minh với tư cách là cán bộ của Quốc tế cộng sản nêu ra trong Hội nghị BCHTW 8, tháng 5/1941?",
    "answer": "Thành lập Chính phủ nhân dân của nước Việt Nam Dân chủ Cộng hoà."
  },
  {
    "id": 80,
    "question": "Nội dung chính của Bản yêu sách 8 điểm do Nguyễn Ái Quốc gửi đến Hội nghị Véc xay là gì?",
    "answer": "Đòi quyền bình đẳng về pháp lý và quyền tự do, dân chủ cho nhân dân An Nam"
  },
  {
    "id": 81,
    "question": "Theo quan điểm của Hồ Chí Minh, con đường (tiến trình) cách mạng giải phóng dân tộc ở Việt Nam phát triển như thế nào?",
    "answer": "Giải phóng dân tộc, giải phóng xã hội, giải phóng giai cấp, giải phóng con người"
  },
  {
    "id": 82,
    "question": "Phương hướng chiến lược của Cách mạng Việt Nam là “Làm tư sản dân quyền cách mạng và thổ địa cách mạng để đi tới xã hội cộng sản” được Hồ Chí Minh nêu ra, lần đầu tiên trong tác phẩm nào?",
    "answer": "“Chánh cương vắn tắt của Đảng”,"
  },
  {
    "id": 83,
    "question": "Vai trò lãnh đạo của Đảng đối với cách mạng Việt Nam được Hồ Chí Minh thể hiện lần đầu tiên trong tác phẩm nào?",
    "answer": "“Đường cách mệnh”"
  },
  {
    "id": 84,
    "question": "Nội dung nào được Hồ Chí Minh coi là vấn đề có tính nguyên tắc trong hoạt động của Đảng?",
    "answer": "Tất cả"
  },
  {
    "id": 85,
    "question": "Trong hoạt động của Đảng, nguyên tắc nào Hồ Chí Minh coi là việc làm thường xuyên “như mỗi ngày phải rửa mặt”?",
    "answer": "Tự phê bình và phê bình"
  },
  {
    "id": 86,
    "question": "Theo quan điểm của Hồ Chí Minh, quyền lực của các cơ quan nhà nước, của những người cán bộ trong bộ máy nhà nước do ai ủy thác?",
    "answer": "Do nhân dân ủy thác"
  },
  {
    "id": 87,
    "question": "Theo quan điểm của Hồ Chí Minh, Mặt trận dân tộc thống nhất hoạt động theo nguyên tắc nào?",
    "answer": "Hiệp thương dân chủ"
  },
  {
    "id": 88,
    "question": "Quyền lãnh đạo của Đảng Cộng sản trong Mặt trận dân tộc thống nhất là do nhân tố nào quyết định?",
    "answer": "Do nhân dân tự nguyện thừa nhận"
  },
  {
    "id": 89,
    "question": "Theo Hồ Chí Minh nguyên tắc nào là cốt lõi trong chiến lược đại đoàn kết dân tộc?",
    "answer": "Phải được xây dựng trên nền tảng liên minh công nhân - nông dân - trí thức, dưới sự lãnh đạo của Đảng."
  },
  {
    "id": 90,
    "question": "Theo quan niệm của Hồ Chí Minh, khi nào khối đại đoàn kết dân tộc mới thực sự bền chặt?",
    "answer": "Tất cả"
  },
  {
    "id": 91,
    "question": "Theo quan niệm của Hồ Chí Minh, trong xã hội thuộc địa, để văn hóa phát triển tự do, trước hết phải làm gì?",
    "answer": "Làm cách mạng giải phóng dân tộc"
  },
  {
    "id": 92,
    "question": "Theo quan niệm Hồ Chí Minh, nền giáo dục mới ở Việt Nam ra đời từ khi nào?",
    "answer": "Khi Cách Mạng Tháng thành công, 1945"
  },
  {
    "id": 93,
    "question": "Theo quan niệm Hồ Chí Minh, người làm việc có hiệu quả, năng suất cao, có tinh thần tự lực cánh sinh là biểu hiện của phẩm chất nào?",
    "answer": "Cần"
  },
  {
    "id": 94,
    "question": "Khi Đảng Cộng sản trở thành Đảng cầm quyền, Hồ Chí Minh thường trăn trở nhất về điều gì?",
    "answer": "Về hiện tượng Đảng viên xa rời quần chúng"
  },
  {
    "id": 95,
    "question": "Theo quan niệm Hồ Chí Minh, nếu không có phẩm chất này thì không thể “đi làm cách mạng, càng không thể nói đến chủ nghĩa xã hội, chủ nghĩa cộng sản”?",
    "answer": "Tình yêu thương con người"
  },
  {
    "id": 96,
    "question": "Trong những nguyên tắc xây dựng đạo đức mới, nguyên tắc nào được Hồ Chí Minh coi là quan trọng nhất?",
    "answer": "Nói đi đôi với làm, phải nêu gương đạo đức"
  },
  {
    "id": 97,
    "question": "Theo quan niệm Hồ Chí Minh, để thực hiện “chiến lược trồng người” cần nhiều biện pháp, song quan trọng nhất là biện pháp nào?",
    "answer": "Giáo dục và Đào tạo"
  },
  {
    "id": 98,
    "question": "Theo quan niệm Hồ Chí Minh, người không nói dối người khác, không tự dối mình, nghiêm túc trong cuộc sống, trong thi cử là biểu hiện của phẩm chất nào?",
    "answer": "Chính"
  },
  {
    "id": 99,
    "question": "Theo quan niệm Hồ Chí Minh, người luôn khiêm tốn học hỏi cái hay của người khác, phát triển cái hay và sửa chữa cái dỡ của mình là biểu hiện của phẩm chất nào?",
    "answer": "Chính"
  },
  {
    "id": 100,
    "question": "Theo quan điểm của Hồ Chí Minh, Mặt trận dân tộc thống nhất hoạt động theo nguyên tắc nào?",
    "answer": "Hiệp thương dân chủ"
  },
  {
    "id": 101,
    "question": "Tại Đại hội Đảng lần thứ mấy, Ban chấp hành trung ương Đảng Cộng sản Việt Nam đã tôn vinh Chủ Tịch Hồ Chí Minh là “Anh hùng dân tộc vĩ đại”?",
    "answer": "Đại hội Đảng lần thứ IV"
  },
  {
    "id": 102,
    "question": "Trong các giá trị truyền thống tốt đẹp của dân tộc Việt Nam, giá trị nào được Đảng ta xác định là nền tảng tư tưởng, là điểm xuất phát, là động lực thúc đẩy Hồ Chí Minh ra đi tìm đường cứu nước giải phóng dân tộc?",
    "answer": "Truyền thống yêu nước"
  },
  {
    "id": 103,
    "question": "Sau hơn 30 năm bôn ba ở nước ngoài, vào thời gian nào, Hồ Chí Minh về nước trực tiếp chỉ đạo cách mạng Việt Nam?",
    "answer": "Cuối tháng 1-1941"
  },
  {
    "id": 104,
    "question": "Hồ Chí Minh sáng lập Hội Việt Nam Cách mạng Thanh niên, tổ chức tiền thân của Đảng Cộng sản Việt Nam vào thời gian nào, ở đâu?",
    "answer": "Tháng 6 -1925 ở Trung Quốc"
  },
  {
    "id": 105,
    "question": "Vào thời gian nào Hồ Chí Minh đã nêu ra phương hướng khởi nghĩa vũ trang giành chính quyền?",
    "answer": "5/1941"
  },
  {
    "id": 106,
    "question": "Theo quan điểm của Đảng ta, sự kiện nào có tác động tới việc hình thành tư tưởng của Hồ Chí Minh về cách mạng Việt Nam?",
    "answer": "Sự ra đời của Quốc tế Cộng sản do Lê Nin sáng lập"
  },
  {
    "id": 107,
    "question": "Dựa trên cơ sở nào Hồ Chí Minh cho rằng cách mạng ở thuộc địa có vai trò rất lớn trong việc cùng với cách mạng vô sản ở chính quốc tiêu diệt chủ nghĩa đế quốc?",
    "answer": "Tinh thần cách mạng ở các nước thuộc địa rất cao,"
  },
  {
    "id": 108,
    "question": "Nội dung nào được Hồ Chí Minh xác định là điều kiện bảo đảm độc lập dân tộc gắn liền với chủ nghĩa xã hội?",
    "answer": "Củng cố, tăng cường vai trò lãnh đạo của Đảng Cộng sản"
  },
  {
    "id": 109,
    "question": "Theo quan niệm của Hồ Chí Minh, trong các quyền của dân tộc thuộc địa, trước hết phải được thể hiện ở quyền nào?",
    "answer": "Bình đẳng và tự do"
  },
  {
    "id": 110,
    "question": "Nội dung nào không phải là quan điểm của Hồ Chí Minh, khi đề cập đến các yếu tố đảm bảo cho cách mạng giải phóng dân tộc ở Việt Nam đi đến thắng lợi?",
    "answer": "Phải có sự giúp đỡ của tất cả các nước trên thế giới"
  },
  {
    "id": 111,
    "question": "Nội dung nào là quan điểm của Lênin về sự ra đời của Đảng Cộng sản?",
    "answer": "Sự kết hợp chủ nghĩa Mác với phong trào công nhân"
  },
  {
    "id": 112,
    "question": "Nội dung nào là quan điểm của HCM về sự ra đời của Đảng Cộng sản?",
    "answer": "Là sự kết hợp chủ nghĩa Mác Lê nin với phong trào công nhân và phong trào yêu nước"
  },
  {
    "id": 113,
    "question": "Vào thời gian và từ sự kiện nào Hồ Chí Minh khẳng định : \"Đảng ta là đạo đức, là văn minh\".?",
    "answer": "Năm 1960, trong Lễ Kỷ niệm 30 năm Ngày thành lập Đảng"
  },
  {
    "id": 114,
    "question": "Dựa theo quan điểm của Hồ Chí Minh, nội dung nào không phải là biểu hiện của bệnh quan liêu?",
    "answer": "Không hoàn thành nhiệm vụ"
  },
  {
    "id": 115,
    "question": "Dựa theo quan điểm của Hồ Chí Minh, nội dung nào không phải là nguyên tắc trong hoạt động của Đảng Cộng sản Việt Nam?",
    "answer": "Phải biết dựa vào sức mạnh của Mặt trận"
  },
  {
    "id": 116,
    "question": "Dựa theo quan điểm của Hồ Chí Minh, nội dung nào không phải là nguyên tắc trong hoạt động của Đảng Cộng sản Việt Nam?",
    "answer": "Chiến lược lâu dài của cách mạng Việt Nam"
  },
  {
    "id": 117,
    "question": "Trong tư tưởng Hồ Chí Minh, mối quan hệ giữa Đảng Cộng sản Việt Nam với Mặt trận được xác định như thế nào?",
    "answer": "Là mối quan hệ máu thịt"
  },
  {
    "id": 118,
    "question": "Theo Hồ Chí Minh yếu tố nào được Người xác định là “hạt nhân của nền tảng” của khối đại đoàn kết toàn dân tộc?",
    "answer": "Sự đoàn kết, thống nhất trong Đảng"
  },
  {
    "id": 119,
    "question": "Theo quan niệm của Hồ Chí Minh, sức mạnh dân tộc là sự tổng hợp của các yếu tố vật chất và tinh thần, song trước hết là sức mạnh của yếu tố nào?",
    "answer": "Chủ nghĩa yêu nước,"
  },
  {
    "id": 120,
    "question": "Theo Hồ Chí Minh, điểm tương đồng giữa cách mạng Việt Nam với các dân tộc trên thế giới là gì?",
    "answer": "Cùng giương cao ngọn cờ độc lập, tự do và quyền bình đẳng dân tộc"
  },
  {
    "id": 121,
    "question": "Hồ Chí Minh đưa ra khái niệm văn hóa vào thời gian nào?",
    "answer": "Tháng 8-1943"
  },
  {
    "id": 122,
    "question": "Theo quan niệm của Hồ Chí Minh, vị trí của văn hóa được đặt như thế nào trong mối quan hệ với kinh tế, chính trị và xã hội?",
    "answer": "Đặt ngang với kinh tế, chính trị và xã hội"
  },
  {
    "id": 123,
    "question": "Theo quan niệm Hồ Chí Minh, người cán bộ, Đảng viên muốn cho dân tin, dân phục phải có yếu tố cơ bản nào?",
    "answer": "Tư cách đạo đức tốt"
  },
  {
    "id": 124,
    "question": "Theo Hồ Chí Minh, khi người cán bộ công chức không gần dân, không tin dân sẽ dẫn đến căn “bệnh” nào?",
    "answer": "Quan liêu"
  },
  {
    "id": 125,
    "question": "Theo quan niệm Hồ Chí Minh, yếu tố nào là nền tảng cơ bản cho tài năng con người phát triển?",
    "answer": "Phẩm chất đaọ đức"
  },
  {
    "id": 126,
    "question": "Sau năm 1930, tư tưởng Hồ Chí Minh đã trải qua gia đoạn thử thách, phải đến Đại Hội Đảng lần thứ mấy, tư tưởng của Người mới được khẳng định trở lại?",
    "answer": "Đại Hội Đảng lần thứ II, năm 1951."
  },
  {
    "id": 127,
    "question": "Trên bình diện quốc tế, vào năm nào tổ chức Giáo dục – Khoa học & Văn hóa của Liên Hợp Quốc (UNESCO) đánh giá Hồ Chí Minh là “anh hùng giải phóng dân tộc, nhà văn hóa kiệt xuất của Việt Nam”?",
    "answer": "Năm 1987"
  },
  {
    "id": 128,
    "question": "Nội dung chính của Bản yêu sách 8 điểm do Nguyễn Ái Quốc gửi đến hội nghị Vec xay là gì?",
    "answer": "Đòi quyền bình đẳng về pháp lý và quyền tự do, dân chủ cho nhân dân An Nam"
  },
  {
    "id": 129,
    "question": "Theo quan điểm của Đảng ta, nguyên nhân trực tiếp làm cho các phong trào yêu nước ở Việt Nam cuối thế kỷ XIX đầu thế kỷ XX thất bại là gì?",
    "answer": "Người lãnh đạo các phong trào yêu nước chưa có đường lối cách mạng đúng đắn"
  },
  {
    "id": 130,
    "question": "Trên cơ sở nào Hồ Chí Minh khẳng định: Muốn cứu nước và giải phóng dân tộc không có con đường nào khác con đường cách mạng vô sản”.",
    "answer": "Đây là con đường cách mạng triệt để nhất"
  },
  {
    "id": 131,
    "question": "Theo quan điểm của Đảng ta, nguyên nhân nào Quốc tế Cộng sản và Đảng Cộng sản Việt Nam phê phán những tư tưởng mới mẻ, đúng đắn, sáng tạo của Nguyễn Ái Quốc trong Cương lĩnh chính trị đầu tiên là \"hữu khuynh\", là \"dân tộc chủ nghĩa\"?",
    "answer": "Không nắm vững tình hình các dân tộc thuộc địa và Đông Dương"
  },
  {
    "id": 132,
    "question": "Tại Hội nghị Ban Chấp hành Trung ương Đảng (5/1941) do Hồ Chí Minh chủ trì, Người đã đưa ra chủ trương gì?",
    "answer": "Thành lập Chính phủ nhân dân của nước Việt Nam Dân chủ Cộng hoà;"
  },
  {
    "id": 133,
    "question": "Nội dung nào phản ánh cơ sở thực tiễn thế giới cuối thế kỷ XIX đầu XX có ảnh hưởng sâu sắc đến việc hình thành tư tưởng Hồ Chí Minh?",
    "answer": "Chủ nghĩa tư bản chuyển sang giai đoạn Chủ nghĩa đế quốc"
  },
  {
    "id": 134,
    "question": "Trong tác phẩm Bản án chế độ thực dân Pháp (1925), Hồ Chí Minh viết: “Chủ nghĩa tư bản là ……”",
    "answer": "Một con Đỉa"
  },
  {
    "id": 135,
    "question": "Tháng 5-1941, tại Pác Bó, Cao Bằng, với tư cách là cán bộ Quốc tế Cộng sản, Hồ Chí Minh chủ trì Hội nghị Trung ương Đảng (5/1941). Hội nghị này Người đã đặt nhiệm vụ nào lên hàng đầu?",
    "answer": "Giải phóng dân tộc"
  },
  {
    "id": 136,
    "question": "Hồ Chí Minh đã phát triển những giá trị thiêng liêng, bất biến về quyền của các dân tộc trong Tuyên ngôn Độc lập của cách mạng Mỹ năm 1776, Tuyên ngôn Nhân quyền và Dân quyền của Cách mạng Pháp năm 1791, Người viết “Tất cả các dân tộc trên thế giới đều sinh ra ……, dân tộc nào cũng có …….., quyền …… và quyền ….... Đó là những lẽ phải không ai chối cãi được”. Tìm dãy chữ phù hợp với tư tưởng của Người.",
    "answer": "Bình đẳng, quyền sống, sung sướng, tự do"
  },
  {
    "id": 137,
    "question": "Nội dung nào phản ánh quan điểm của Hồ Chí Minh về cách mạng giải phóng dân tộc?",
    "answer": "Phải lấy liên minh Công - Nông làm nền tảng"
  },
  {
    "id": 138,
    "question": "Dựa theo quan niệm của Hồ Chí Minh, nội dung nào không phải là là mục tiêu về quan hệ xã hội trong quá trình xây dựng chủ nghĩa xã hội ở Việt Nam.",
    "answer": "Phải xây dựng nền giáo dục hiện đại"
  },
  {
    "id": 139,
    "question": "Hồ Chí Minh khẳng định: “Đồng bào Nam Bộ là dân nước Việt Nam. Sông có thể cạn, núi có thể mòn, song chân lý đó không bao giờ thay đổi”. Nội dung trên được Người thể hiện trong tác phẩm nào?",
    "answer": "Thư gửi đồng bào Nam Bộ"
  },
  {
    "id": 140,
    "question": "Theo quan điểm của Mác và Ăngghen, cách mạng vô sản ở châu Âu đi theo con đường (tiến trình) nào?",
    "answer": "Giai phóng giai cấp - Giai phóng dân tộc - Giai phóng xã hội - Giai phóng con người."
  },
  {
    "id": 141,
    "question": "Hồ Chí Minh kế thừa và đổi mới tư tưởng nào của Phật Giáo?",
    "answer": "Cứu chúng sinh ra khỏi khổ nạn,"
  },
  {
    "id": 142,
    "question": "Nội dung nào không phải là quan niệm của Hồ Chí Minh khi nói về “Đảng văn minh”?",
    "answer": "Phải có số lượng đông và tổ chức rộng rãi và chặt chẽ"
  },
  {
    "id": 143,
    "question": "Dựa theo quan điểm của Hồ Chí Minh, nội dung nào không phải là nguyên tắc trong hoạt động của Đảng?",
    "answer": "Nói đi đôi với làm"
  },
  {
    "id": 144,
    "question": "Theo quan điểm của Hồ Chí Minh, nội dung nào là nguyên tắc trong hoạt động của Đảng?",
    "answer": "Tập trung dân chủ"
  },
  {
    "id": 145,
    "question": "Vào thời gian nào, từ khảo sát, so sánh nhiều học thuyết, nhiều chủ nghĩa, Hồ Chí Minh khẳng định: \"Bây giờ học thuyết nhiều, chủ nghĩa nhiều, nhưng chủ nghĩa chân chính nhất, chắc chắn nhất, cách mạng nhất là chủ nghĩa Lênin\"?",
    "answer": "Cuối những năm 20 của thế kỷ XX"
  },
  {
    "id": 146,
    "question": "Hồ Chí Minh khẳng định: cách mạng trước hết phải có \"đảng cách mệnh, để trong thì vận động và tổ chức dân chúng, ngoài thì liên lạc với dân tộc bị áp bức và vô sản giai cấp ở mọi nơi. Đảng có vững, cách mệnh mới thành công, cũng như người cầm lái có vững thuyền mới chạy\" Luận điểm trên được Người thể hiện lần đầu tiên trong tác phẩm nào?",
    "answer": "Đường cách mệnh"
  },
  {
    "id": 147,
    "question": "Dựa theo quan điểm của Hồ Chí Minh, nội dung nào không phản ánh đạo đức của Đảng Cộng sản Việt Nam?",
    "answer": "Đảng viên phải chiếm số lượng đông đảo trong dân cư"
  },
  {
    "id": 148,
    "question": "Dựa theo quan điểm của Hồ Chí Minh, nội dung nào không phải là nguyên tắc trong hoạt động của Đảng Cộng sản Việt Nam?",
    "answer": "Hiệp thương dân chủ"
  },
  {
    "id": 149,
    "question": "Dựa theo quan điểm của Hồ Chí Minh, nội dung nào không phải là bản chất giai cấp công nhân của nhà nước ta - Nhà nước Việt Nam Dân chủ Cộng hòa?",
    "answer": "Hoạt động của Nhà nước theo nguyên tắc đồng thuận với nhân dân"
  },
  {
    "id": 150,
    "question": "Hồ Chí Minh xác định vị trí của Đảng Cộng sản Việt Nam trong Mặt trận dân tộc thống nhất như thế nào?",
    "answer": "Đứng trong Mặt trận, lãnh đạo Mặt trận."
  },
  {
    "id": 151,
    "question": "Theo quan niệm của Hồ Chí Minh, trong các lực lượng đoàn kết quốc tế, lực lượng nào có vai trò đảm bảo vững chắc cho thắng lợi của chủ nghĩa cộng sản?",
    "answer": null
  },
  {
    "id": 152,
    "question": "Theo quan niệm của Hồ Chí Minh, nền tảng của khối đại đoàn kết toàn dân tộc là?",
    "answer": null
  },
  {
    "id": 153,
    "question": "Nội dung nào không phải là lập trường giai cấp công nhân khi thực hiện nguyên tắc hiệp thương dân chủ?",
    "answer": null
  },
  {
    "id": 154,
    "question": "Theo quan niệm của Hồ Chí Minh, nguyên tắc hiệp thương dân chủ được thể hiện ở nội dung nào?",
    "answer": null
  },
  {
    "id": 155,
    "question": "Nội dung nào không phải là quan điểm của Hồ Chí Minh khi bàn về điều kiện để cả dân tộc hay toàn dân trở thành lực lượng to lớn, có sức mạnh vô địch?.",
    "answer": null
  },
  {
    "id": 156,
    "question": "Để khơi dậy sức mạnh và quyền tự quyết của mỗi dân tộc, Hồ Chí Minh đã chỉ đạo thành lập Mặt trận Việt Nam Độc lập đồng minh (gọi tắt là Việt Minh) vào thời gian nào?",
    "answer": null
  },
  {
    "id": 157,
    "question": "Mục tiêu chung nhất của các thành viên trong Mặt trận dân tộc thống nhất là gì?",
    "answer": null
  },
  {
    "id": 158,
    "question": "Hồ Chí Minh viết: “Có đạo đức cách mạng thì khi gặp ……., gian khổ,........cũng không….....rụt rè lùi bước. Khi gặp thuận lợi thành công cũng giữ được tinh thần gian khổ, chất phát, khiêm tốn”. Tìm dãy chữ phù hợp với tư tưởng của Người",
    "answer": null
  },
  {
    "id": 159,
    "question": "Theo quan điểm của Đảng ta, đặc trưng cốt lõi nhất của tư tưởng đạo đức Hồ Chí Minh là gì?",
    "answer": null
  },
  {
    "id": 160,
    "question": "Theo quan niệm Hồ Chí Minh, nội dung và phương pháp giáo dục phải toàn diện, song nội dung nào phải đặt lên vị trí hàng đầu?",
    "answer": null
  },
  {
    "id": 161,
    "question": "Nội dung nào không phài là quan niệm của Hồ Chí Minh khi bàn về nguyên tắc xây dựng đạo đức cách mạng?",
    "answer": null
  },
  {
    "id": 162,
    "question": "Hồ Chí Minh viết: “Không tham địa vị. Không tham tiền tài. Không tham sung sướng. Không ham người tâng bốc mình. Vì vậy mà quang minh chính đại, không bao giờ hủ hóa. Chỉ có một thứ ham là ham học, ham làm, ham tiến bộ”. Theo quan niệm của Người nội dung trên phản ánh phẩm chất nào?",
    "answer": null
  },
  {
    "id": 163,
    "question": "Theo Hồ Chí Minh, trong đời sống có bốn vấn đề phải được coi là quan trọng ngang nhau và có sự tác động lẫn nhau, đó là chính trị, kinh tế, văn hóa, xã hội. Nhưng ở nước Việt Nam thuộc địa thì trước hết phải tiến hành nhiệm vụ gì?",
    "answer": null
  },
  {
    "id": 164,
    "question": "Bối cảnh đặc biệt xuất hiện khái niệm văn hóa của Hồ Chí Minh?",
    "answer": null
  },
  {
    "id": 165,
    "question": "Nội dung nào không phải là quan điểm của Hồ Chí Minh khi bàn về hình thức bản sắc văn hóa của một dân tộc?",
    "answer": null
  },
  {
    "id": 166,
    "question": "Tổng kết kinh nghiệm thắng lợi của cách mạng Việt Nam, Hồ Chí Minh khẳng định: “Chúng tôi giành được thắng lợi đó trước hết là nhờ cái vũ khí không gì thay thế được là:…….”",
    "answer": null
  },
  {
    "id": 167,
    "question": "Theo quan điểm của Đảng ta, từ sự kiện nào Hồ Chí Minh trở thành người tham gia sáng lập Đảng Cộng sản Pháp?",
    "answer": null
  },
  {
    "id": 168,
    "question": "Nội dung tư tưởng nào của Nho giáo được Hồ Chí Minh chú ý kế thừa và đổi mới?",
    "answer": null
  },
  {
    "id": 169,
    "question": "Nội dung nào không phài là tư tưởng của Hồ Chí Minh khi nói về Yêu sách nhằm cải cách nền pháp lý ở Đông Dương?",
    "answer": null
  },
  {
    "id": 170,
    "question": "Trong hành trình tìm đường cứu nước, sự kiện nào phản ánh khát vọng của Hồ Chí Minh: Độc lập dân tộc phải là “quyền thiêng liêng, bất khả xâm phạm của tất cả các dân tộc”?",
    "answer": null
  },
  {
    "id": 171,
    "question": "Từ sự kiện nào cho thấy Hồ Chí Minh sớm thấy được tầm quan trọng của Hiến pháp và pháp luật?",
    "answer": null
  },
  {
    "id": 172,
    "question": "Nội dung nào phản ánh quan điểm của Hồ Chí Minh: tiến lên chủ nghĩa xã hội là một tất yếu khách quan?",
    "answer": null
  },
  {
    "id": 173,
    "question": "Hồ Chí Minh viết về mục tiêu của đấu tranh cách mạng là: “Làm cho nước Nam được hoàn toàn độc lập, dân chúng được tự do...thủ tiêu hết các thứ quốc trái...thâu hết ruộng đất của đế quốc chủ nghĩa làm của công, chia cho dân cày nghèo. Bỏ sưu thuế cho dân cày nghèo...thi hành luật ngày làm 8 giờ”. Nội dung trên lần đầu tiên được Người thể hiện trong tác phẩm nào?",
    "answer": null
  },
  {
    "id": 174,
    "question": "Nội dung nào phản ánh quan điểm của Hồ Chí Minh về tính tất yếu và vai trò lãnh đạo của Đảng Cộng sản Việt Nam?",
    "answer": null
  },
  {
    "id": 175,
    "question": "Từ phân tích, khảo sát, so sánh các học thuyết, các cuộc cách mạng xã hội, Hồ Chí Minh cho rằng để cách mạng Việt Nam đi đến thành công cần phải:…?",
    "answer": null
  },
  {
    "id": 176,
    "question": "Nội dung nào phản ánh bản chất giai cấp công nhân của nhà nước ta - Nhà nước Việt Nam Dân chủ Cộng hòa?",
    "answer": null
  },
  {
    "id": 177,
    "question": "Nội dung nào không phải là quan điểm của Hồ Chí Minh khi bàn về bản chất giai cấp công nhân của Nhà nước ta thống nhất với tính nhân dân và tính dân tộc?",
    "answer": null
  },
  {
    "id": 178,
    "question": "Nội dung nào không phải là tư tưởng của Hồ Chí Minh khi Người nói về thước đo của Nhà nước vì dân?",
    "answer": null
  },
  {
    "id": 179,
    "question": "Nội dung nào không phải là  quan điểm của Hồ Chí Minh khi nói về “Nhà nước Pháp quyền nhân nghĩa\" ?",
    "answer": null
  },
  {
    "id": 180,
    "question": "Nội dung nào không phải là quan điểm của Hồ Chí Minh khi bàn về  tính nhân văn trong Nhà nước pháp quyền nhân nghĩa?",
    "answer": null
  },
  {
    "id": 181,
    "question": "Nội dung nào phản ánh quan điểm của Hồ Chí Minh về vai trò quan trọng của Đại đoàn kết toàn dân tộc?",
    "answer": null
  },
  {
    "id": 182,
    "question": "Nội dung nào không phải là quan điểm của Hồ Chí Minh khi nói về vai trò quan trọng của Đại đoàn kết toàn dân tộc?",
    "answer": null
  },
  {
    "id": 183,
    "question": "Dựa theo quan điểm của Hồ Chí Minh, nội dung  nào không phải là lực lượng của khối đại đoàn kết toàn dân tộc ?",
    "answer": null
  },
  {
    "id": 184,
    "question": "Theo Hồ Chí Minh điểm tương đồng giữa cách mạng Việt Nam với các lực lượng tiến bộ trên thế giới là gì?",
    "answer": null
  },
  {
    "id": 185,
    "question": "Theo quan niệm của Hồ Chí Minh, điều kiên nào được Người xác định là bất di bất dịch, là ngọn cờ, là mẫu số chung để quy tụ mọi lực lượng trong dân tộc vào trong Mặt trận?",
    "answer": null
  },
  {
    "id": 186,
    "question": "Theo quan điểm của Hồ Chí Minh, nội dung nào được Người xác định là nguyên tắc trong quá trình xây dựng nền đạo đức cách mạng?",
    "answer": null
  },
  {
    "id": 187,
    "question": "Theo quan niệm của Hồ Chí Minh, người hoàn toàn vì lợi ích chung, không chút thiên tư, thiên vị, luôn công tâm, luôn đặt lợi ích của Đảng, của nhân dân, của dân tộc lên trên hết là biểu hiện của phẩm chất nào?",
    "answer": null
  },
  {
    "id": 188,
    "question": "Theo quan niệm của Hồ Chí Minh người không tham địa vị, tiền tài, không tham danh – lợi, không ham người khác tâng bốc mình là biểu hiện của phẩm chất nào?",
    "answer": null
  },
  {
    "id": 189,
    "question": "Vào thời gian nào, Hồ Chí Minh tuyên bố chính sách đối ngoại của Việt Nam là: “làm bạn với tất cả mọi nước dân chủ và không gây thù oán với một ai”.",
    "answer": null
  },
  {
    "id": 190,
    "question": "Tại Đại hội Đảng lần thứ mấy, Đảng ta không chỉ khẳng định tư tưởng Hồ Chí Minh là tài sản tinh thần vô cùng to lớn và quý giá của Đảng và dân tộc, mà còn khẳng định: tư tưởng Hồ Chí Minh “mãi mãi soi đường cho sự nghiệp cách mạng của nhân dân ta giành thẳng lợi”?",
    "answer": "Đại hội Đảng lần thứ XI"
  },
  {
    "id": 191,
    "question": "Nội dung nào không phải là quan niệm của Hồ Chí Minh khi bàn về vấn đề “trồng người”?",
    "answer": "Phải được tiến hành trên nền tảng liên minh công nông dưới sự lãnh đạo của Đảng"
  },
  {
    "id": 192,
    "question": "Theo quan điểm của Đảng ta, những thử thách lớn đối với Hồ Chí Minh xuất hiện không chỉ từ phía kẻ thù, mà còn từ một số người trong tổ chức nào?",
    "answer": "Quốc tế Cộng sản và Đảng Cộng sản Đông Dương"
  },
  {
    "id": 193,
    "question": "Ảnh hưởng cuộc cách mạng của nước nào, phong trào yêu nước Việt Nam cuối thế kỷ XIX đầu thế kỷ XX chuyển từ khuynh hướng phong kiến sang khuynh hướng dân chủ tư sản?",
    "answer": "Cách mạng dân chủ tư sản ở Trung Quốc"
  },
  {
    "id": 194,
    "question": "Theo quan điểm của Hồ Chí Minh, phương hướng chiến lược của cách mạng Việt Nam đi theo tiến trình nào?",
    "answer": "Làm tư sản dân quyền cách mạng - thổ địa cách mạng - đi tới xã hội Cộng sản"
  },
  {
    "id": 195,
    "question": "Dựa theo quan điểm của Hồ Chí Minh, nội dung nào không phải là một trong những yêu cầu chủ yếu để xây dựng đội ngũ cán bộ, đảng viên?",
    "answer": "Phải có lòng khoan dung độ lượng với con người"
  },
  {
    "id": 196,
    "question": "Nội dung nào không phải là quan điểm của Hồ Chí Minh khi nói về biểu hiện của bệnh quan liêu?",
    "answer": "Không thực hiện tốt các chủ trương, chính sách của Đảng"
  },
  {
    "id": 197,
    "question": "Dựa theo quan niệm của Hồ Chí Minh, nội dung nào không phải là nguyên tắc xây dựng đạo đức cách mạng?",
    "answer": "Kết hợp lý luận với thực tiễn"
  },
  {
    "id": 198,
    "question": "Theo Hồ Chí Minh điểm tương đồng giữa cách mạng Việt Nam với phong trào cộng sản và công nhân quốc tế là gì?",
    "answer": "Cùng giương cao ngọn cờ độc lập dân tộc gắn liền vời chủ nghĩa xã hội,"
  },
  {
    "id": 199,
    "question": "Hồ Chí Minh đã kế thừa và phát triển tư tưởng “Cần, kiệm, liêm, chính, chí công vô tư” của tôn giáo nào?",
    "answer": "Lão giáo"
  },
  {
    "id": 200,
    "question": "Hồ Chí Minh tổng kết: “Đạo đức cách mạng không phải trên trời sa xuống. Nó do đấu tranh, rèn luyện bền bỉ hằng ngày mà phát triển và củng cố. Cũng như ngọc càng mài càng sáng, vàng càng luyện càng trong\".   Nội dung trên phản ánh nguyên tắc nào trong quá trình xây dựng đạo đức cách mạng?",
    "answer": "Tu dưỡng đạo đức suốt đời"
  }
];
