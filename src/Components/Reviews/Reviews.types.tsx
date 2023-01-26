export type ReviewsPropsTypes = {
    reviews: {
        user: {
            name: string,
            profileImage?: string
        },
        review: string,
        starts: number,
        createdAt: string
    }[]
}