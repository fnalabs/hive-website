
    export type RemoteKeys = 'REMOTE_ALIAS_IDENTIFIER/Routes';
    type PackageType<T> = T extends 'REMOTE_ALIAS_IDENTIFIER/Routes' ? typeof import('REMOTE_ALIAS_IDENTIFIER/Routes') :any;