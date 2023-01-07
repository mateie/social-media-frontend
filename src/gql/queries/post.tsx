import gql from "graphql-tag";

// Post Queries
export const FetchPosts = gql`
    {
        getPosts {
            id body createdAt
            poster {
                username
                avatar
                displayName
            }
            media {
                path
                isVideo
            }
            likeCount
            likes {
                liker {
                    username
                    avatar
                    displayName
                }
            }
            dislikeCount
            dislikes {
                disliker {
                    username
                    avatar
                    displayName
                }
            }
            commentCount
            comments {
                id createdAt body
                commenter {
                    username
                    avatar
                    displayName
                }
                replies {
                    id
                    createdAt
                    body
                    likes {
                        liker {
                            username
                            avatar
                            displayName
                        }
                    }
                    dislikes {
                        disliker {
                            username
                            avatar
                            displayName
                        }
                    }
                    replier {
                        username
                        avatar
                        displayName
                    }
                }
                likes {
                    liker {
                        username
                        avatar
                    }
                }
                dislikes {
                    disliker {
                        username
                        avatar
                        displayName
                    }
                }
            }
            isSpotlight
            spotlightAt
        }
    }
`;

export const FetchPost = gql`
    query($postId: String!) {
        getPost(postId: $postId) {
            id body createdAt
            poster {
                username
                avatar
                displayName
            }
            media {
                path
                isVideo
            }
            likeCount
            likes {
                liker {
                    username
                    avatar
                    displayName
                }
            }
            dislikeCount
            dislikes {
                disliker {
                    username
                    avatar
                    displayName
                }
            }
            commentCount
            comments {
                id createdAt body
                commenter {
                    username
                    avatar
                    displayName
                }
                replies {
                    id
                    createdAt
                    body
                    replier {
                        username
                        avatar
                        displayName
                    }
                    likes {
                        liker {
                            username
                            avatar
                            displayName
                        }
                    }
                    dislikes {
                        disliker {
                            username
                            avatar
                            displayName
                        }
                    }
                }
                likes {
                    liker {
                        username
                        avatar
                        displayName
                    }
                }
                dislikes {
                    disliker {
                        username
                        avatar
                        displayName
                    }
                }
            }
            isSpotlight
            spotlightAt
        }
    }
`;

export const FetchRanked = gql`
    {
        getRanked {
            id body createdAt
            poster {
                username
                avatar
                displayName
            }
            media {
                path
                isVideo
            }
            likeCount
            likes {
                liker {
                    username
                    avatar
                    displayName
                }
            }
            dislikeCount
            dislikes {
                disliker {
                    username
                    avatar
                    displayName
                }
            }
            commentCount
            comments {
                id createdAt body
                commenter {
                    username
                    avatar
                    displayName
                }
                replies {
                    id
                    createdAt
                    body
                    likes {
                        liker {
                            username
                            avatar
                            displayName
                        }
                    }
                    dislikes {
                        disliker {
                            username
                            avatar
                            displayName
                        }
                    }
                    replier {
                        username
                        avatar
                        displayName
                    }
                }
                likes {
                    liker {
                        username
                        avatar
                        displayName
                    }
                }
                dislikes {
                    disliker {
                        username
                        avatar
                        displayName
                    }
                }
            }
            isSpotlight
            spotlightAt
        }
    }
`;

export const FetchSpotlightPosts = gql`
    {
        getSpotlightPosts {
            id body createdAt
            poster {
                username
                avatar
                displayName
            }
            media {
                path
                isVideo
            }
            likeCount
            likes {
                liker {
                    username
                    avatar
                    displayName
                }
            }
            dislikeCount
            dislikes {
                disliker {
                    username
                    avatar
                    displayName
                }
            }
            commentCount
            comments {
                id createdAt body
                commenter {
                    username
                    avatar
                    displayName
                }
                replies {
                    id
                    createdAt
                    body
                    likes {
                        liker {
                            username
                            avatar
                            displayName
                        }
                    }
                    dislikes {
                        disliker {
                            username
                            avatar
                            displayName
                        }
                    }
                    replier {
                        username
                        avatar
                        displayName
                    }
                }
                likes {
                    liker {
                        username
                        avatar
                        displayName
                    }
                }
                dislikes {
                    disliker {
                        username
                        avatar
                        displayName
                    }
                }
            }
            isSpotlight
            spotlightAt
        }
    }
`;

export const FetchFollowingPosts = gql`
    query($username: String!) {
        getFollowingPosts(username: $username) {
            id body createdAt
            poster {
                username
                avatar
                displayName
            }
            media {
                path
                isVideo
            }
            likeCount
            likes {
                liker {
                    username
                    avatar
                    displayName
                }
            }
            dislikeCount
            dislikes {
                disliker {
                    username
                    avatar
                    displayName
                }
            }
            commentCount
            comments {
                id createdAt body
                commenter {
                    username
                    avatar
                    displayName
                }
                replies {
                    id
                    createdAt
                    body
                    likes {
                        liker {
                            username
                            avatar
                            displayName
                        }
                    }
                    dislikes {
                        disliker {
                            username
                            avatar
                            displayName
                        }
                    }
                    replier {
                        username
                        avatar
                        displayName
                    }
                }
                likes {
                    liker {
                        username
                        avatar
                        displayName
                    }
                }
                dislikes {
                    disliker {
                        username
                        avatar
                        displayName
                    }
                }
            }
            isSpotlight
            spotlightAt
        }
    }
`;

export const FetchFreshPosts = gql`
    query FreshPosts($first: Int, $offset: Int)
    {
        getFreshPosts(first: $first, offset: $offset) {
            id body createdAt
            poster {
                username
                avatar
                displayName
            }
            media {
                path
                isVideo
            }
            likeCount
            likes {
                liker {
                    username
                    avatar
                    displayName
                }
            }
            dislikeCount
            dislikes {
                disliker {
                    username
                    avatar
                    displayName
                }
            }
            commentCount
            comments {
                id createdAt body
                commenter {
                    username
                    avatar
                    displayName
                }
                replies {
                    id
                    createdAt
                    body
                    likes {
                        liker {
                            username
                            avatar
                            displayName
                        }
                    }
                    dislikes {
                        disliker {
                            username
                            avatar
                            displayName
                        }
                    }
                    replier {
                        username
                        avatar
                        displayName
                    }
                }
                likes {
                    liker {
                        username
                        avatar
                        displayName
                    }
                }
                dislikes {
                    disliker {
                        username
                        avatar
                        displayName
                    }
                }
            }
            isSpotlight
            spotlightAt
        }
    }
`;

export const FetchUserPosts = gql`
    query($username: String!) {
        getUserPosts(username: $username) {
            id body createdAt
            poster {
                username
                avatar
                displayName
            }
            media {
                path
                isVideo
            }
            likeCount
            likes {
                liker {
                    username
                    avatar
                    displayName
                }
            }
            dislikeCount
            dislikes {
                disliker {
                    username
                    avatar
                    displayName
                }
            }
            commentCount
            comments {
                id createdAt body
                commenter {
                    username
                    avatar
                    displayName
                }
                replies {
                    id
                    createdAt
                    body
                    likes {
                        liker {
                            username
                            avatar
                            displayName
                        }
                    }
                    dislikes {
                        disliker {
                            username
                            avatar
                            displayName
                        }
                    }
                    replier {
                        username
                        avatar
                        displayName
                    }
                }
                likes {
                    liker {
                        username
                        avatar
                        displayName
                    }
                }
                dislikes {
                    disliker {
                        username
                        avatar
                        displayName
                    }
                }
            }
            isSpotlight
            spotlightAt
        }
    }
`;