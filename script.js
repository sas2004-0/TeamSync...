document.addEventListener("DOMContentLoaded", () => {
    const employees = [
      { name: "نورة العتيبي", specialization: "الدعم الفني", cooperation: "دعم أنظمة", email: "n.alotaibi@email.com", extension: "1001" },
      { name: "عبدالله القحطاني", specialization: "الدعم الفني", cooperation: "صيانة أجهزة", email: "abdullah.q@gmail.com", extension: "1002" },
      { name: "سارة الحربي", specialization: "الدعم الفني", cooperation: "حل أعطال", email: "s.harbee@outlook.com", extension: "1003" },
      { name: "فهد العنزي", specialization: "الشبكات", cooperation: "تركيب شبكات", email: "fahd.anazy@ksu.edu.sa", extension: "2001" },
      { name: "ريم السبيعي", specialization: "الشبكات", cooperation: "تهيئة بنية تحتية", email: "r.sbeaii@data.org", extension: "2002" },
      { name: "محمد الغامدي", specialization: "الموارد البشرية", cooperation: "توظيف", email: "m.gamdi@edu.sa", extension: "3001" },
      { name: "لجين التميمي", specialization: "الموارد البشرية", cooperation: "تدريب", email: "lojain@editorial.net", extension: "3002" },
      { name: "خالد اليامي", specialization: "الموارد البشرية", cooperation: "تطوير كفاءات", email: "khaled.yami@pm.org", extension: "3003" },
      { name: "هيا الشهري", specialization: "إدارة صلاحيات", cooperation: "مستويات الوصول", email: "h.shahri@designhub.com", extension: "4001" },
      { name: "عبدالعزيز الدوسري", specialization: "إدارة مشاريع", cooperation: "تخطيط وتنفيذ", email: "aziz.dosari@tech.sa", extension: "5001" },
      { name: "نواف الشمري", specialization: "إدارة مشاريع", cooperation: "مراقبة جودة", email: "n.shammari@project.org", extension: "5002" },
      { name: "جود الحربي", specialization: "الذكاء الاصطناعي", cooperation: "تحليل بيانات", email: "j.harbee@ai.com", extension: "6001" },
      { name: "رائد العتيبي", specialization: "الذكاء الاصطناعي", cooperation: "نظم ذكية", email: "r.otaibi@ai.org", extension: "6002" },
      { name: "سمية السويلم", specialization: "الذكاء الاصطناعي", cooperation: "نمذجة تعلم آلي", email: "s.swailem@ai.edu", extension: "6003" },
      { name: "يزن الغامدي", specialization: "الذكاء الاصطناعي", cooperation: "رؤية حاسوبية", email: "y.gamdi@ai.net", extension: "6004" },
    ];
  
    const container = document.getElementById("employeeContainer");
    const searchInput = document.getElementById("searchInput");
  
    function displayEmployees(filteredEmployees) {
      container.innerHTML = "";
      filteredEmployees.forEach(emp => {
        container.innerHTML += `
          <div class="card">
            <h3>${emp.name}</h3>
            <p><strong>التخصص:</strong> ${emp.specialization}</p>
            <p><strong>نوع التعاون:</strong> ${emp.cooperation}</p>
            <p><strong>الإيميل:</strong> <a href="mailto:${emp.email}">${emp.email}</a></p>
            <p><strong>التحويلة:</strong> ${emp.extension}</p>
          </div>
        `;
      });
    }
  
    displayEmployees(employees);
  
    searchInput.addEventListener("input", (e) => {
      const value = e.target.value.trim();
      const filtered = employees.filter(emp => emp.specialization.includes(value));
      displayEmployees(filtered);
    });
  });
  