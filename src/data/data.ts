import meat1 from "../assets/comida_1.svg"
import meat2 from "../assets/comida_2.svg"
import meat3 from "../assets/comida_3.svg"
import meat4 from "../assets/comida_4.svg"
import post1 from "../assets/bloco_image_1.svg"
import post2 from "../assets/bloco_image_2.svg"
import post3 from "../assets/bloco_image_3.svg"
import post4 from "../assets/bloco_image_4.svg"
import avatar1 from "../assets/avatar1.svg"
import avatar2 from "../assets/avatar2.svg"
import avatar3 from "../assets/avatar3.svg"
import avatar4 from "../assets/avatar4.svg"

export type Recipe = {
    id: number
    title: string
    photo: string
}

export type Post = {
    id: number
    title: string
    photo: string
    author: string
    avatar: string
}

export const recipes: Recipe[] = [
    {
        id: 1,
        title: "Broccoli Salad with Bacon",
        photo: meat1,
    },
    {
        id: 2,
        title: "Classic Beef Burgers",
        photo: meat2,
    },
    {
        id: 3,
        title: "Classic Potato Salad",
        photo: meat3,
    },
    {
        id: 4,
        title: "Cherry Cobbler on the Grill",
        photo: meat4,
    },
]

export const posts: Post[] = [
    {
        id: 1,
        title: "Quick-start guide to nuts and seeds",
        photo: post1,
        author: "Kevin Ibrahim",
        avatar: avatar1,

    },
    {
        id: 2,
        title: "Nutrition: Tips for Improving Your Health",
        photo: post2,
        author: "Mike Jackson",
        avatar: avatar2,

    },
    {
        id: 3,
        title: "The top 10 benefits of eating healthy",
        photo: post3,
        author: "Bryan McGregor",
        avatar: avatar3,

    },
    {
        id: 4,
        title: "Quick-start guide to nuts and seeds",
        photo: post4,
        author: "Kevin Ibrahim",
        avatar: avatar4,

    },
    {
        id: 5,
        title: "Quick-start guide to nuts and seeds",
        photo: post4,
        author: "Kevin Ibrahim",
        avatar: avatar4,

    },
    {
        id: 6,
        title: "Quick-start guide to nuts and seeds",
        photo: post4,
        author: "Kevin Ibrahim",
        avatar: avatar4,

    },
    {
        id: 7,
        title: "Quick-start guide to nuts and seeds",
        photo: post4,
        author: "Kevin Ibrahim",
        avatar: avatar4,

    }
]
