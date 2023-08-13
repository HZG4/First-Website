document.getElementById("feedback-form").addEventListener("submit", function(event) {
    event.preventDefault();

    const form = event.target;

    const data = new FormData(form);
    const firstName = data.get("firstName");
    const lastName = data.get("lastName");
    const email = data.get("email");
    const comment = data.get("comment");

    const templateParams = {
      from_name: `${firstName} ${lastName}`,
      to_name: "Hamza Ghafoor",
      message: comment,
    };

    emailjs.send("service_8n9k6qj", "template_h5qwh79", templateParams)
      .then(function(response) {
        console.log("Email sent successfully:", response);
        alert("Thank you for your feedback! Your message has been sent.");
      })
      .catch(function(error) {
        console.error("Email sending error:", error);
        alert("Oops! Something went wrong. Please try again later.");
      });

    form.reset();
  });
