export interface ISeat {
    id: number;
    seatNumber?:number;
    is_active: boolean;
    taken?: ISeatStatus;
    disabled?:boolean;
    is_rightTable?: boolean;
    is_leftTable?: boolean;
  }
  
  export type ISeatStatus = {
    id: number;
    gender: 'male' | 'female' | 'disabled';
  };

  export interface VagonProps {
    activeIndex: number;
    
  }