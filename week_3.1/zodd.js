import { z } from "zod";

function validateInput(arr) {
  const schema = z.array(z.number());

  const response = schema.safeParse(arr);
  console.log(response);
}

// validateInput([1, 2, 3, "3"]);

function inputValidaton(obj) {
  const schema = z.object({
    email: z.string().email(),
    password: z.string().min(8),
  });

  const response = schema.safeParse(obj);
  console.log(response);
}

// inputValidaton({
//   email: "aziz@gmail.com",
//   password: "12345678",
// });

app.post("/login", (req, res) => {
  const response = inputValidaton(req.body);
  if (!response.success) {
    res.json({ msg: "YOur inputs are invalid" });
  }
  return;
});
