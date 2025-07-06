import QRCode from 'react-qr-code';

export function QrGenerator({ value }: { value: string }) {
    return (
        <div>
            <QRCode
                className="border-4 border-white"
                value={value}
                size={256}
                title="QR Code"
            />
        </div>
    );
}
