import gql from "graphql-tag";

export const FetchNotifications = gql`
    query($username: String!) {
        getNotifications(username: $username) {
            body
            createdAt
            type
            notifier
            reference
            user {
                username
                avatar
                displayName
            }
        }
    }
`;