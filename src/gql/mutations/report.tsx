import gql from "graphql-tag";

export const ReportUser = gql`
    mutation reportUser($username: String!, $reason: String!) {
        reportUser(username: $username, reason: $reason)
    }
`;

export const ReportPost = gql`
    mutation reportPost($postId: String!, $reason: String!) {
        reportPost(postId: $postId, reason: $reason)
    }
`;

export const ReportComment = gql`
    mutation reportComment($commentId: String!, $reason: String!) {
        reportComment(commentId: $commentId, reason: $reason)
    }
`;

export const REPORT_REPLY = gql`
    mutation reportReply($replyId: String!, $reason: String!) {
        reportReply(replyId: $replyId, reason: $reason)
    }
`;