
const questions = document.querySelectorAll(".faq-question");

questions.forEach((question) => {
    question.addEventListener("click", () => {
        const answer = question.nextElementSibling;
        const isExpanded =
            question.getAttribute("aria-expanded") === "true";

        // Close all answers first
        questions.forEach((otherQuestion) => {
            otherQuestion.setAttribute("aria-expanded", "false");
            otherQuestion.nextElementSibling.hidden = true;
        });

        // Open the selected answer if it was closed
        if (!isExpanded) {
            question.setAttribute("aria-expanded", "true");
            answer.hidden = false;
        }
    });
});
