<template>
    <div>
     <footer>
      <b-container>
        <div class="d-flex flex-row justify-content-center">
          <div class="p-2" style="width: 60vw;">
            <span>
              <img class="footer-brand mr-3" src="../../assets/coffee-nav-icon.png">
              <strong class="coffee-shop">StartUp Coffee</strong>
            </span>
            <p class="footer-text mt-3" style="line-height: 30px;">
              StartUp Coffee is a store that sells some good <br> 
              meals, and especially coffee. We provide <br>
              high quality beans
            </p>
            <div class="footer-icon-copyright d-none d-sm-block">
              <div class="footer-media-icon d-flex flex-row mb-4">
                <a href="#" class="p-2"><img src="../../assets/fb-icon.png"></a>
                <a href="#" class="p-2"><img src="../../assets/tw-icon.png"></a>
                <a href="#" class="p-2"><img src="../../assets/ig-icon.png"></a>
              </div>
              <p style="font-size: 16px; font-weight: 400; color: #AFB5C0;">
                &copy;2020CoffeeStore
              </p>
            </div>
          </div>
          <div class="p-2 d-none d-sm-block" style="width: 20vw;">
            <h5 class="footer-text-section">Product</h5>
            <ul class="footer-text-2">
              <li>Download</li>
              <li>Pricing</li>
              <li>Locations</li>
              <li>Countries</li>
              <li>Blog</li>
            </ul>
          </div>
          <div class="p-2 d-none d-sm-block" style="width: 20vw;">
            <h5 class="footer-text-section">Engage</h5>
            <ul class="footer-text-2">
              <li>StartUp Coffee ?</li>
              <li>FAQ</li>
              <li>About Us</li>
              <li>Privacy Policy</li>
              <li>Terms of Service</li>
            </ul>
          </div>
        </div>
        <!-- mobile view -->
        <div class="d-block d-sm-none">
          <div class="d-flex flex-row justify-content-center">
            <div class="p-2" style="width: 30vw;">
              <h5 class="footer-text-section">Product</h5>
              <ul class="footer-text-2">
                <li>Download</li>
                <li>Pricing</li>
                <li>Locations</li>
                <li>Countries</li>
                <li>Blog</li>
              </ul>
            </div>
            <div class="p-2" style="width: 30vw;">
              <h5 class="footer-text-section">Engage</h5>
              <ul class="footer-text-2">
                <li>StartUp Coffee ?</li>
                <li>FAQ</li>
                <li>About Us</li>
                <li>Privacy Policy</li>
                <li>Terms of Service</li>
              </ul>
            </div>
          </div>
          <div class="d-flex flex-row justify-content-center">
            <div class="footer-icon-copyright d-block d-sm-">
              <div class="footer-media-icon d-flex flex-row mb-4">
                <a href="#" class="p-2"><img src="../../assets/fb-icon.png"></a>
                <a href="#" class="p-2"><img src="../../assets/tw-icon.png"></a>
                <a href="#" class="p-2"><img src="../../assets/ig-icon.png"></a>
              </div>
              <p style="font-size: 16px; font-weight: 400; color: #AFB5C0;">
                &copy;2020CoffeeStore
              </p>
            </div>
          </div>
        </div>
      </b-container>
    </footer>
    </div>
</template>

<style scoped>
footer {
  padding: 150px 0 30px 0;
  background-color: #f8f8f8;
}

footer img.footer-brand {
  width: 30px;
  height: 33px;
}

.footer-text {
  font-size: 16px;
  font-weight: 500;
  color: #4f5665;
}

.footer-text-2 {
  font-size: 16px;
  font-weight: 400;
  color: #4f5665;
  list-style-type: none;
  padding: unset;
  line-height: 40px;
}

.footer-text-section {
  font-size: 18px;
  font-weight: 500;
  color: #4f5665;
}

.footer-text {
  font-size: 16px;
  font-weight: 500;
  color: #4f5665;
}
</style>