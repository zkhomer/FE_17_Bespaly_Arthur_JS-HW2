var question = prompt("Please, write any number. For example: 10h - 10 hours; 10d - 10 days; 10w - 10 weeks; 10m - 10 months")
if (question == "10h") {
    alert((parseFloat(question)) * 3600)
}
else if (question == "10d") {
    alert((parseFloat(question)) * 24 * 3600)
}
if (question == "10w") {
    alert((parseFloat(question)) * 168 * 3600)
}
if (question == "10m") {
    alert((parseFloat(question)) * 720 * 3600)
}