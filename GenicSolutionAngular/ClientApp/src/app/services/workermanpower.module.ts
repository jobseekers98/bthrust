export class WorkerManpower {
    Id: string;
    CustomerId: string;
    CustomerName: string;
    PropertyId: string;
    PropertyAddress: string;
    StartDate: string;
    EndDate: string;
    JobHeading: string;
    WorkerTeam: WorkerTeam[];
    WorkerName?: any;
}
export class Workers {
    Id: string;
    Name: string;
    SkillSet: string;
    IsActive: boolean;
}
export class WorkerTeam {
    Id: number;
    WorkerManpowerId: string;
    WorkerId: string;
}
export class WorkerRestList {
    Id: number;
    WorkersId: string;
    RestDate: string;
}
export class WorkerManpowerFilter {
    Date?: string;
    CustomerId?: any = [];
    WorkerId?: any = [];
    IsReady?: boolean;
}
export class WorkerManpowerImage {
    Id?: number;
    Image1Data?: string;
    Image2Data?: string;
    HeaderText1?: string;
    HeaderText2?: string;
    FotterText?: string;
    HeaderTextBackground?: string;
    LeftTextBackground?: string;
    RightTextBackground?: string;
    FotterTextBackground?: string;
    HeaderTextColor?: string;
    LeftTextColor?: string;
    RightTextColor?: string;
    FotterTextColor?: string;
    UpdateBy?: string;
    UpdateDate?: string;
}
