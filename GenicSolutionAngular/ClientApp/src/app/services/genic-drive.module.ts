export class GenicDrive {
    Id: string;
    UserId?: string;
    Name: string;
    ParentId?: string;
    AttachmentName: string;
    AttachmentSize: number;
    FolderType: number;
    IsFavourite: boolean;
    IsTrash: boolean;
    IsLocked: boolean;
    LockedBy: string;
    LockPassword: string;
    ColorCode: string;
    CreatedDate?: Date;
    CreatedBy?: string;
    CreatedByName: string;
    UpdatedDate?: Date;
    UpdatedBy?: string;
    UpdatedByName: string;
    OpenDate?: Date;
    FileExtension: string;
    Description: string;
    DriveCommentList: DriveComment[];
}
export class SharedDrive {
    Id: string;
    GenicDriveId?: string;
    SenderId?: string;
    ToUserId?: string;
    ToUserName: string;
    SendDate?: Date;
    Remark: string;
    IsEdit: boolean;
    IsComment: boolean;
    IsView: boolean;
}
export class DriveComment {
    CommentId: string;
    GenicDriveId?: string;
    CommentedBy?: string;
    Comment: string;
    CommentedDate?: Date;
}
export class DriveLog {
    LogId: string;
    GenicDriveId?: string;
    DriveName: string;
    FolderType: number;
    FileExtension: string;
    UserId?: string;
    UserName: string;
    DrivePath: string;
    Action: string;
    Activity: string;
    LogDate?: Date;
}
export class GenicDriveUser {
    Id: string;
    Name: string;
    UserType: string;
}
export class SearchMyDrive {
    QuickList: GenicDrive[];
    FolderList: GenicDrive[];
    FileList: GenicDrive[];
}
export class SearchRecentDrive {
    TodaysFileList: GenicDrive[];
    EarlierMonthFileList: GenicDrive[];
}
