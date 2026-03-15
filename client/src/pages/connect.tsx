import { useQuery } from "@tanstack/react-query";
import { QRCodeSVG } from "qrcode.react";
import { useLocation } from "wouter";
import { Wifi, Monitor } from "lucide-react";

interface ServerInfo {
  lanIP: string;
  port: number;
  url: string;
}

export default function ConnectPage() {
  const [, navigate] = useLocation();

  const { data: info, isLoading } = useQuery<ServerInfo>({
    queryKey: ["/api/info"],
    refetchInterval: 10000,
  });

  const isLocalhost =
    !info || info.lanIP === "localhost" || info.lanIP === "127.0.0.1";
  const displayUrl = info?.url ?? "Loading...";

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center px-6 py-10"
      style={{ background: "hsl(220 20% 7%)", color: "#e2e8f0" }}
      data-testid="connect-page"
    >
      <div className="w-full max-w-lg flex flex-col items-center gap-8">
        <div className="text-center">
          <div className="flex items-center justify-center gap-2 mb-2">
            <div
              className="w-10 h-10 rounded-xl flex items-center justify-center font-black text-lg"
              style={{ background: "hsl(30 100% 52%)" }}
            >
              M
            </div>
          </div>
          <h1 className="text-3xl font-bold mt-2">M-864D Controller</h1>
          <p className="mt-2 text-gray-400 text-base">
            Scan the QR code or type the address into any browser on this
            network.
          </p>
        </div>

        {isLoading ? (
          <div
            className="w-64 h-64 rounded-2xl animate-pulse"
            style={{ background: "hsl(220 15% 14%)" }}
          />
        ) : isLocalhost ? (
          <div
            className="w-64 h-64 rounded-2xl flex flex-col items-center justify-center gap-3 text-center px-6"
            style={{ background: "hsl(220 15% 14%)", color: "#6b7280" }}
          >
            <Monitor className="w-10 h-10" />
            <p className="text-sm leading-snug">
              No LAN address detected. Open <strong>localhost:5000</strong> in
              your browser.
            </p>
          </div>
        ) : (
          <div
            className="p-4 bg-white rounded-2xl shadow-xl"
            data-testid="qr-code"
          >
            <QRCodeSVG
              value={info!.url}
              size={240}
              level="M"
              includeMargin={false}
            />
          </div>
        )}

        <div className="text-center">
          <p className="text-xs text-gray-500 uppercase tracking-widest mb-1">
            Network address
          </p>
          <p
            className="text-2xl font-bold font-mono break-all"
            style={{ color: "hsl(30 100% 60%)" }}
            data-testid="network-url"
          >
            {displayUrl}
          </p>
        </div>

        <div
          className="w-full rounded-xl px-5 py-4 text-sm text-gray-400 leading-relaxed"
          style={{
            background: "hsl(220 15% 13%)",
            border: "1px solid hsl(220 15% 20%)",
          }}
        >
          <ol className="list-decimal list-inside space-y-1">
            <li>Connect the device to the same Wi-Fi or network.</li>
            <li>
              Scan the QR code <em>or</em> type the address above into any
              browser.
            </li>
            <li>Enter the M-864D mixer IP address to connect and control.</li>
          </ol>
        </div>

        <button
          onClick={() => navigate("/")}
          className="text-sm underline underline-offset-4 transition-opacity hover:opacity-70"
          style={{ color: "hsl(30 100% 60%)" }}
          data-testid="button-open-controller"
        >
          Open controller on this device →
        </button>
      </div>
    </div>
  );
}
