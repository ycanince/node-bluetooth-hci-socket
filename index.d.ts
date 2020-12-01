// By: Yusuf Can INCE <ycanince@gmail.com>

/// <reference types="node" />

interface Device {
    devId: number | null;
    devUp: boolean | null;
    /** USB-IF vendor ID. */
    idVendor: number | null;
    /** USB-IF product ID. */
    idProduct: number | null;
    /** Integer USB device number */
    busNumber: number | null;
    /** Integer USB device address */
    deviceAddress: number | null;
}

interface BluetoothHciSocket extends NodeJS.EventEmitter {
    getDeviceList(): Device[];
    isDevUp(): boolean;

    start(): void;
    stop(): void;
    reset(): void;

    bindRaw(devId: number): void;
    bindUser(devId: number): void;
    bindControl(): void;

    setFilter(filter: Buffer): void;
    write(data: Buffer): void;

    on(event: "data", cb: (data: Buffer) => void): this;
    on(event: "error", cb: (error: NodeJS.ErrnoException) => void): this;
}

declare const bluetoothHciSocket: BluetoothHciSocket;
export = bluetoothHciSocket;
