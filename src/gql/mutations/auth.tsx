import gql from "graphql-tag";

// Authentication Mutations
export const RegisterUser = gql`
    mutation register (
        $username: String!
        $email: String!
        $password: String!
        $confirmPassword: String!
    ) {
        register (
            registerInput: {
                username: $username
                email: $email
                password: $password
                confirmPassword: $confirmPassword
            }
        ) {
            id email username createdAt token
        }
    }
`;

export const LoginUser = gql`
    mutation login (
        $username: String!
        $password: String!
    ) {
        login (
            username: $username
            password: $password
        )
    }
`;

export const AuthUser = gql`
    mutation authUser (
        $token: String!
    ) {
        authUser (
            token: $token
        ) {
            id
            email
            username
            displayName
            createdAt
            bio
            avatar
            warns { by reason createdAt }
            posts { id body createdAt }
            followers { user { username avatar } createdAt }
            following { user { username avatar } createdAt }
            followerCount
            followingCount
            warnCount
            type
            isMember
            isBanned
            banDuration
            lastIP
            lastActivity
            badges { id badge dateEarned }
            currentBadge
            spotlights { id postID createdAt }
            nameBadge
            nameColor
        }
    }
`;