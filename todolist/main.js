const btn = document.querySelector(".btn");
const lists = document.querySelector(".lists");

const addTodo = () => {
  const input = document.querySelector(".input");
  const inputTxt = input.value;

  if (!inputTxt) {
    alert("메시지를 입력해 주세요!");
    return;
  }

  const liContents = `<li>
                            <p>${inputTxt}</p>
                            <span class="delete-icon">
                                <i class="ri-delete-bin-2-fill"></i>
                            </span>
                        </li>`;

  lists.insertAdjacentHTML("afterbegin", liContents);
  input.value = "";
};

btn.addEventListener("click", addTodo);

const activeClick = (e) => {
  if (e.target.tagName === "LI") {
    e.target.classList.toggle("complete");
  } else if (e.target.tagName === "I") {
    e.target.parentNode.parentNode.remove();
  }
};

lists.addEventListener("click", activeClick);
