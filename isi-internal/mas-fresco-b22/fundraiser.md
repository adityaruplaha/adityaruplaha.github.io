---
layout: page
title: "Mas Fresco 2022-23 Fundraiser"
permalink: /isi-internal/mas-fresco-b22/fundraiser
published_on: 2022-08-25
last_updated: 2022-08-27
back_to: "Mas Fresco 2022-23"
back_to_url: /isi-internal/mas-fresco-b22
---

<script>
    let url = "upi://pay?pa=masfrescob22@upi&pn=Adityarup%20Laha&mc=0000&tn=For%20Mas%20Fresco%20B22%20%28$$$$%29&am=2000&cu=INR"
    let api_url = "http://api.qrserver.com/v1/create-qr-code/?data=$data$&&size=1000x1000&qzone=4"

    function update() {
        var roll_input = document.getElementById("roll");
        var roll = roll_input.value.trim();
        if (roll.length > 0) {
            roll_input.classList.add("nonempty")
        } else {
            roll_input.classList.remove("nonempty")
        }
        if (roll.length == 0 || !roll_input.checkValidity()) {
            document.getElementById("qr-div").style.display = 'none';
            document.getElementById("qr-div-invalid").style.display = 'block';
            return;
        }
        document.getElementById("qr-div").style.display = 'block';
        document.getElementById("qr-div-invalid").style.display = 'none';

        var my_url = url.replace("$$$$", roll);
        document.getElementById("link").href = my_url;
        document.getElementById("qr").src = api_url.replace("$data$", encodeURIComponent(my_url));
    }
</script>

Please click on or scan the QR code to pay INR 2000 for Mas Fresco of B22. This is addressed only to B21.

Google Pay has some issues when tapping directly on the QR, taking a screenshot and sharing it into the app should be okay though.

<label for="roll">Please enter your roll number:</label>
<input id="roll" pattern="BS21[\d]{2}" placeholder="BS21XX" oninput="update()"/>

<style>
input:invalid.nonempty#roll {
    background-color: #ffdddd;
}

input:valid.nonempty#roll {
    background-color: #ddffdd;
}
</style>

<div id="qr-div" style="text-align: center; display: none">
    <a id="link" href="#">
        <img id="qr" src="#" width="250em" alt="Pay using UPI." title="Pay using UPI." style="border-radius: 2em">
    </a>
</div>

<div id="qr-div-invalid" style="text-align: center">
    <i>Please enter a valid roll number first.</i>
</div>

Alternatively, you can also pay on RazorPay, but **please use this as a backup** as RazorPay charges a processing fee (around INR 50). If the button below doesn't work, use [this link](https://rzp.io/l/gJK9ZP82).

<form><script src="https://checkout.razorpay.com/v1/payment-button.js" data-payment_button_id="pl_K9pzPvZmZaiJbI" async> </script> </form>

You can also pay in cash.

## See Also

- [Collection Sheet](https://docs.google.com/spreadsheets/d/1FYWJ6aX_QXFoBAg2Tc46FBMbTwLHiz_mxHX55LN2PU4/edit?usp=sharing)