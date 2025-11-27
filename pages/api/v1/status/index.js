function status(request, response) {
  response.status(200).json({ chave: "em construção" });
}

export default status;
