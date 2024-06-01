// Tasks

const Categories = [
    "Excersise",
    "Study",
    "Church",
    "Entertainment",
    "Cooking",
    "Washing",
    "Cleaning",
    "Code"
]

const Tasks = [
        {
            task:"Statistics",
            category:"Study"
        },
        {
            task:"Mathematics",
            category:"Study"
        },
        {
            task:"Mobile App development",
            category:"Study"
        },
        {
            task:"Push Ups",
            category:"Excersise"
        },
        {
            task:"Jogging",
            category:"Excercise"
        },
        {
            task:"Plank",
            category:"Excercise"
        },
        {
            task:"Breakfast",
            category:"Cooking"
        },
        {
            task:"Supper",
            category:"Cooking"
        },
        {
            task:"Dinner",
            category:"Cooking"
        },
        {
            task:"Web Development",
            category:"Code"
        },
        {
            task:"Bash Scripting",
            category:"Code"
        },
        {
            task:"Mobile App Development",
            category:"Code"
        },
        {
            task:"Room",
            category:"Cleaning"
        },
        {
            task:"Clothes",
            category:"Washing"
        },
        {
            task:"Sunday Service",
            category:"Church"
        },
        {
            task: "Gaming",
            category:"Entertainment"
        }
    ]

export default function findTask(Category) {
    return Tasks.filter((item)=>item.category==Category)
}

export {Tasks,Categories};