import gql from "graphql-tag";

export const CreateNotification = gql`
    subscription createNotification($username: String!) {
        createNotification(username: $username) {
            body
            username
            createdAt
            type
            notifier
            reference
        }
    }
`;