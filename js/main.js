console.log("JavaScript Portion of the Test");

// Step 1: Write a multi-line comment detailing your name and student number


// Step 2: Create a block scoped, immutable variable that stores an empty array
{
    const exam_array = [];
}
// Step 3: Add the 3 people's names to the array
{
    const exam_array = [];
    exam_array.unshift("Ash");
    exam_array.push("Mandy");
    exam_array.push("Amelia");
}


// Step 4: Remove the second array item from the array
{
    const exam_array = [Ash, Mandy, Amelia];
    exam_array.splice(1, 1);
}

// Step 5: Using array map, iterate over the array items and make them all uppercase. Store the result in a new, block scoped, mutable variable
{
    const exam_array = [Ash, Mandy, Amelia];
    const exam_array_upper = exam_array.map(exam_array => exam_array.toUpperCase());
}

// Step 6: Create an event listener that fires a callback function when the aside h2 is clicked. It should alert "Hello from Boo the World's Cutest Dog!";
const asideh2 = document.querySelector('aside h2');
image.addEventListener("click", function () {
    console.log("Hello from Boo the World's Cutest Dog");
    alert("Hello from Boo the World's Cutest Dog ");
});