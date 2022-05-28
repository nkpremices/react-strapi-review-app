import React from 'react'
import { Link } from 'react-router-dom';
import { useQuery, gql } from '@apollo/client';

const REVIEWS = gql`
    query GetReviews {
        reviews {
            data {
                id
                attributes {
                    title
                    body
                    rating
                }
            }
        }
    }
`

export default function Homepage() {
    const {loading, data, error} = useQuery(REVIEWS);

    // console.log(data)

    if (loading) return <p>Loading...</p>
    if (error) return <p>Error :(</p>

    return (
        <div>
            {data && Array.isArray(data.reviews.data) && data.reviews.data.map(review => (
                <div key={review.id} className="review-card">
                    <div className="rating">{review.attributes.rating}</div>
                    <h2>{review.attributes.title}</h2>

                    <small>console list</small>

                    <p>{review.attributes.body.substring(0, 200)}...</p>
                    <Link to={`/details/${review.id}`}>Read more</Link>
                </div>
            ))}
        </div>
    )
}