/*

    a <p> with red text that says “Hey I’m red!”
    an <h3> with blue text that says “I’m a blue h3!”
    a <div> with a black border and pink background 
    color with the following elements inside of it:
        another <h1> that says “I’m in a div”
        a <p> that says “ME TOO!”
        Hint for this one: after creating the <div> with createElement, append the <h1> and <p> to it before adding it to the container.


*/


const container = document.querySelector('#container');
container.style.flexDirection = "row";
container.style.display = "flex";
container.style.width = "960px";
container.style.height = "960px";

const btn = document.querySelector('#start');
btn.innerText = "Click to Start";
btn.style.width = "100px";
btn.style.height = "20px";
btn.value = "Click to Start";

let width;
let height; 

btn.addEventListener('click', function (e) 
{
    {
        container.textContent = "";
        width = prompt("Enter the width of the box (Max of 100)");
        height = prompt("Enter the height of the box (Max of 100)");
        makeGrid(width, height);
    }
});

container.parentNode.insertBefore(btn, container);

function makeGrid(width, height)
{
    for (let i = 0; i < width; i++)
    {
        const column = document.createElement('div');
        
        for (let i = 0; i < height; i++)
        {
        
           divWidth = 960 / width;
           divHeight = 960 / height; 

            const content = document.createElement('div');
            content.style.width = divWidth + "px";
            content.style.height = divHeight + "px";
            content.style.backgroundColor = "black";
            content.style.border = "1px solid gray";
            content.addEventListener('mouseover', changeColor);
            column.appendChild(content);

            function changeColor() 
            {
              /*if (content.style.backgroundColor == "black")
                {
                    content.style.backgroundColor = "white";
                }
                else
                {
                    content.style.backgroundColor = "black";
                } */
                
                let a = Math.random() * 256;
                let b = Math.random() * 256;
                let c = Math.random() * 256;

                content.style.backgroundColor = "rgb(" + a + "," + b + "," + c + ")";

            }

        container.appendChild(column);

        }

    }
}






SVGTextContentElement.classList