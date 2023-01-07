import gql from "graphql-tag";

// User Queries
export const FetchUsers = gql`
    {
        getUsers {
            username
            displayName
            avatar
            bio
            type
            createdAt
        }
    }
`;

export const FetchUser = gql`
    query($username: String!) {
        getUser(username: $username) {
            username
            displayName
            bio
            avatar
            createdAt
            followers {
                user {
                    username
                    avatar
                }
                createdAt
            }
            followerCount
            following {
                user {
                    username
                    avatar
                }
                createdAt
            }
            followingCount
        }
    }
`;

export const FetchRecentUsers = gql`
    {
        getRecentUsers {
            username
            displayName
            avatar
            createdAt
            followers {
                user {
                    username
                    avatar
                }
            }
        }
    }
`;