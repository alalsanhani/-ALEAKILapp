import './style.css'

document.querySelector('#app').innerHTML = `
  <div class="app">
    <!-- Header -->
    <header class="header">
      <div class="container">
        <div class="nav">
          <div class="logo">
            <h1>الوكيل</h1>
            <span>للمفروشات والإسفنج والأثاث</span>
          </div>
          <nav class="nav-menu">
            <a href="#home" class="nav-link active">الرئيسية</a>
            <a href="#products" class="nav-link">المنتجات</a>
            <a href="#services" class="nav-link">الخدمات</a>
            <a href="#about" class="nav-link">من نحن</a>
            <a href="#contact" class="nav-link">اتصل بنا</a>
          </nav>
          <div class="mobile-menu-btn">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    </header>

    <!-- Hero Section -->
    <section class="hero" id="home">
      <div class="hero-content">
        <h2 class="hero-title">أفضل المفروشات والأثاث في المملكة</h2>
        <p class="hero-subtitle">نوفر لك أجود أنواع المفروشات والإسفنج والأثاث بأفضل الأسعار وأعلى جودة</p>
        <div class="hero-buttons">
          <button class="btn btn-primary">تصفح المنتجات</button>
          <button class="btn btn-secondary">اتصل بنا الآن</button>
        </div>
      </div>
      <div class="hero-image">
        <img src="https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg?auto=compress&cs=tinysrgb&w=800" alt="أثاث فاخر" />
      </div>
    </section>

    <!-- Products Section -->
    <section class="products" id="products">
      <div class="container">
        <h2 class="section-title">منتجاتنا</h2>
        <div class="products-grid">
          <div class="product-card">
            <img src="https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=400" alt="أرائك" />
            <div class="product-info">
              <h3>الأرائك والكنب</h3>
              <p>أرائك مريحة وأنيقة بتصاميم عصرية وكلاسيكية</p>
            </div>
          </div>
          <div class="product-card">
            <img src="https://images.pexels.com/photos/1148955/pexels-photo-1148955.jpeg?auto=compress&cs=tinysrgb&w=400" alt="غرف نوم" />
            <div class="product-info">
              <h3>غرف النوم</h3>
              <p>غرف نوم كاملة بأفضل الخامات والتصاميم</p>
            </div>
          </div>
          <div class="product-card">
            <img src="https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg?auto=compress&cs=tinysrgb&w=400" alt="إسفنج" />
            <div class="product-info">
              <h3>الإسفنج والمراتب</h3>
              <p>إسفنج عالي الجودة ومراتب طبية مريحة</p>
            </div>
          </div>
          <div class="product-card">
            <img src="https://images.pexels.com/photos/1571453/pexels-photo-1571453.jpeg?auto=compress&cs=tinysrgb&w=400" alt="طاولات" />
            <div class="product-info">
              <h3>الطاولات والكراسي</h3>
              <p>طاولات وكراسي بتصاميم متنوعة لجميع الأذواق</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Services Section -->
    <section class="services" id="services">
      <div class="container">
        <h2 class="section-title">خدماتنا</h2>
        <div class="services-grid">
          <div class="service-card">
            <div class="service-icon">🚚</div>
            <h3>التوصيل المجاني</h3>
            <p>نوفر خدمة التوصيل المجاني لجميع أنحاء المملكة</p>
          </div>
          <div class="service-card">
            <div class="service-icon">🔧</div>
            <h3>التركيب والصيانة</h3>
            <p>فريق متخصص لتركيب وصيانة جميع المنتجات</p>
          </div>
          <div class="service-card">
            <div class="service-icon">💰</div>
            <h3>أسعار تنافسية</h3>
            <p>أفضل الأسعار في السوق مع ضمان الجودة</p>
          </div>
          <div class="service-card">
            <div class="service-icon">⭐</div>
            <h3>ضمان الجودة</h3>
            <p>ضمان شامل على جميع المنتجات والخدمات</p>
          </div>
        </div>
      </div>
    </section>

    <!-- About Section -->
    <section class="about" id="about">
      <div class="container">
        <div class="about-content">
          <div class="about-text">
            <h2 class="section-title">من نحن</h2>
            <p>شركة الوكيل للمفروشات والإسفنج والأثاث هي واحدة من الشركات الرائدة في مجال المفروشات والأثاث في المملكة العربية السعودية. نتميز بخبرة تزيد عن 20 عاماً في هذا المجال.</p>
            <p>نحن نقدم أفضل المنتجات بأعلى جودة وأفضل الأسعار، مع التزامنا بتقديم خدمة عملاء متميزة وضمان رضا العملاء.</p>
            <div class="stats">
              <div class="stat">
                <h3>20+</h3>
                <p>سنة خبرة</p>
              </div>
              <div class="stat">
                <h3>5000+</h3>
                <p>عميل راضي</p>
              </div>
              <div class="stat">
                <h3>100+</h3>
                <p>منتج متنوع</p>
              </div>
            </div>
          </div>
          <div class="about-image">
            <img src="https://images.pexels.com/photos/1571471/pexels-photo-1571471.jpeg?auto=compress&cs=tinysrgb&w=600" alt="معرض الأثاث" />
          </div>
        </div>
      </div>
    </section>

    <!-- Contact Section -->
    <section class="contact" id="contact">
      <div class="container">
        <h2 class="section-title">اتصل بنا</h2>
        <div class="contact-content">
          <div class="contact-info">
            <div class="contact-item">
              <div class="contact-icon">📍</div>
              <div>
                <h3>العنوان</h3>
                <p>الرياض، المملكة العربية السعودية</p>
              </div>
            </div>
            <div class="contact-item">
              <div class="contact-icon">📞</div>
              <div>
                <h3>الهاتف</h3>
                <p>+966 50 123 4567</p>
              </div>
            </div>
            <div class="contact-item">
              <div class="contact-icon">📧</div>
              <div>
                <h3>البريد الإلكتروني</h3>
                <p>info@aleakil-furniture.com</p>
              </div>
            </div>
            <div class="contact-item">
              <div class="contact-icon">🕒</div>
              <div>
                <h3>ساعات العمل</h3>
                <p>السبت - الخميس: 9:00 ص - 10:00 م</p>
              </div>
            </div>
          </div>
          <div class="contact-form">
            <form>
              <div class="form-group">
                <input type="text" placeholder="الاسم الكامل" required />
              </div>
              <div class="form-group">
                <input type="tel" placeholder="رقم الهاتف" required />
              </div>
              <div class="form-group">
                <input type="email" placeholder="البريد الإلكتروني" required />
              </div>
              <div class="form-group">
                <textarea placeholder="الرسالة" rows="5" required></textarea>
              </div>
              <button type="submit" class="btn btn-primary">إرسال الرسالة</button>
            </form>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="footer">
      <div class="container">
        <div class="footer-content">
          <div class="footer-section">
            <h3>الوكيل للمفروشات</h3>
            <p>أفضل المفروشات والأثاث في المملكة</p>
          </div>
          <div class="footer-section">
            <h4>روابط سريعة</h4>
            <ul>
              <li><a href="#home">الرئيسية</a></li>
              <li><a href="#products">المنتجات</a></li>
              <li><a href="#services">الخدمات</a></li>
              <li><a href="#about">من نحن</a></li>
            </ul>
          </div>
          <div class="footer-section">
            <h4>تابعنا</h4>
            <div class="social-links">
              <a href="#" class="social-link">فيسبوك</a>
              <a href="#" class="social-link">تويتر</a>
              <a href="#" class="social-link">إنستغرام</a>
            </div>
          </div>
        </div>
        <div class="footer-bottom">
          <p>&copy; 2025 الوكيل للمفروشات والإسفنج والأثاث. جميع الحقوق محفوظة.</p>
        </div>
      </div>
    </footer>
  </div>
`

// Add smooth scrolling for navigation links
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault()
    const targetId = link.getAttribute('href').substring(1)
    const targetElement = document.getElementById(targetId)
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' })
    }
    
    // Update active link
    document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'))
    link.classList.add('active')
  })
})

// Mobile menu toggle
const mobileMenuBtn = document.querySelector('.mobile-menu-btn')
const navMenu = document.querySelector('.nav-menu')

mobileMenuBtn.addEventListener('click', () => {
  navMenu.classList.toggle('active')
  mobileMenuBtn.classList.toggle('active')
})

// Form submission
document.querySelector('form').addEventListener('submit', (e) => {
  e.preventDefault()
  alert('شكراً لك! تم إرسال رسالتك بنجاح. سنتواصل معك قريباً.')
  e.target.reset()
})

// Hero buttons functionality
document.querySelectorAll('.hero-buttons .btn').forEach(btn => {
  btn.addEventListener('click', (e) => {
    if (btn.textContent.includes('تصفح المنتجات')) {
      document.getElementById('products').scrollIntoView({ behavior: 'smooth' })
    } else if (btn.textContent.includes('اتصل بنا')) {
      document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })
    }
  })
})