import gql from "graphql-tag";

// User Mutations
export const FollowUser = gql`
    mutation followUser($username: String!) {
        followUser(username: $username) {
            username
            createdAt
            followers {
                user {
                    username
                    avatar
                }
                createdAt
            }
            following {
                user {
                    username
                    avatar
                }
                createdAt
            }
        }
    }
`;

export const WarnUser = gql`
    mutation warnUser($username: String!, $reason: String!) {
        warnUser(username: $username, reason: $reason) {
            username
            warns {
                by
                reason
            }
            warnCount
        }
    }
`;

export const UPDATE_USER = gql`
    mutation updateUser($newValues: JSON!) {
        updateUser(newValues: $newValues) {
            username
            createdAt
            bio
            avatar
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

export const UpdateUserAvatar = gql`
    mutation updateUserAvatar($avatar: Upload!) {
        updateUserAvatar(avatar: $avatar) {
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