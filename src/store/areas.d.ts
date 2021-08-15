
export interface Position {
  x: number,
  y: number,
}

export interface Size {
  width: number,
  height: number,
}

export interface Permissions {
  enabled: boolean,
  editable: boolean,
  draggable: boolean,
}

export interface Area {
  title: string,
  permissions: Permissions
  position: Position,
  size: Size,
}

export interface AreasState {
  [id: string]: Area
}
