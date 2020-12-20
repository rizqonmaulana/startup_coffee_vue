<template>
    <div class="address-card-container">
        <div class="d-flex justify-content-between">
            <div class="p-2 bd-highlight">
                <span class="poppins" style="color: #fff; font-weight: 700; font-size: 20px; text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.8);">
                    Address details
                </span>
            </div>
            <div class="p-2 bd-highlight">
                <button class="ml-auto poppins"
                    style="
                    border:unset;
                    background-color: unset;
                    color: #fff;
                    "  
                >
                edit
                </button>
            </div>
        </div>
        <div class="address-card-content poppins" 
            style="          
            background-color: #fff !important;
            border-radius: 20px;
            box-shadow: 0px 10px 40px rgba(0, 0, 0, 0.35);
            padding: 30px 35px 10px;
            line-height: 20px;
            ">
            <p style="margin-bottom: unset;">
                <strong>
                Delivery
                </strong>
                to Iskandar Street
            </p>
            <hr style="margin: 12.7px 0">
            <p>
                Km 5 refinery food road oppsite re public road, effurun, Jakarta 
            </p>
            <hr style="margin: 12.7px 0">
            <p>
                +62 81348287878
            </p>
        </div>
    </div>
</template>

<style scoped>
.address-card-container .address-card-content {
  background-color: #fff !important;
  border-radius: 20px;
  -webkit-box-shadow: 0px 10px 40px rgba(0, 0, 0, 0.35);
          box-shadow: 0px 10px 40px rgba(0, 0, 0, 0.35);
  padding: 30px 35px 10px;
  line-height: 20px;
}

.address-card-container .btn-confirm {
  width: 100%;
  line-height: 60px;
  background-color: #6a4029;
  font-weight: 700;
  color: #fff;
  border: unset;
  border-radius: 10px;
  -webkit-box-shadow: 0px 10px 20px rgba(137, 85, 55, 0.4);
          box-shadow: 0px 10px 20px rgba(137, 85, 55, 0.4);
}

.address-card-container .btn-confirm:hover {
  background-color: #663215;
}
</style>