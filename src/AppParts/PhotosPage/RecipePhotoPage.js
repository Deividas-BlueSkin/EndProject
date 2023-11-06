import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import { API_URL } from "../../config"
import axios from "axios"

export default function RecipePhotoPage() {
    const { id } = useParams()

    const [data, setData] = useState()


    useEffect(() => {
        async function getData() {
            const { data } = await axios(`${API_URL}/recipePhotos/${id}`)
            setData(data.url)
        }

        getData()


    }, [id])

    if (!data) return

    return (
        <div>
            <img src={data} alt="recipe" />

        </div>
    )
}