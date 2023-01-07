import gql from "graphql-tag";

export const FetchUserReports = gql`
    {
        getUserReports {
            id
            username
            createdAt
            user {
                username
                avatar
                displayName
            }
            reason
            by
        }
    }
`;

export const FetchPostReports = gql`
    {
        getPostReports {
            id
            postId
            createdAt
            post {
                id body createdAt
                poster {
                    username
                    avatar
                    displayName
                }
                isSpotlight spotlightAt
            }
            reason
            by
        }
    }
`;

export const FetchCommentReports = gql`
    {
        getCommentReports {
            id
            postId
            commentId
            createdAt
            comment {
                id body createdAt
                commenter {
                    username
                    avatar
                    displayName
                }
                likeCount
                dislikeCount
            }
            reason
            by
        }
    }
`;

export const FetchReplyReports = gql`
    {
        getReplyReports {
            id
            postId
            commentId
            replyId
            createdAt
            reply {
                id body createdAt
                replier {
                    username
                    avatar
                    displayName
                }
                to {
                    username
                    avatar
                    displayName
                }
                likeCount
                dislikeCount
            }
            reason
            by
        }
    }
`;