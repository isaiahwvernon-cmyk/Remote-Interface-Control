import { Speaker, Download, ExternalLink, Monitor, Tablet, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <Card className="w-full max-w-lg border-0 shadow-2xl bg-white/80 backdrop-blur-xl">
        <CardContent className="p-8">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 text-white mb-4 shadow-lg shadow-blue-500/25">
              <Speaker className="w-8 h-8" />
            </div>
            <h1 className="text-2xl font-bold text-slate-900" data-testid="text-title">
              TOA IP-A1 Speaker Control
            </h1>
            <p className="text-sm text-slate-500 mt-2 leading-relaxed">
              A simple control interface for classroom speakers.
              Download the HTML file and open it on any device on your school network.
            </p>
          </div>

          <div className="space-y-4">
            <a
              href="/speaker-control.html"
              download="speaker-control.html"
              data-testid="button-download"
            >
              <Button
                className="w-full h-14 rounded-xl bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white font-semibold text-base shadow-lg shadow-blue-500/25"
              >
                <Download className="w-5 h-5 mr-2" />
                Download Speaker Control
              </Button>
            </a>

            <a
              href="/speaker-control.html"
              target="_blank"
              rel="noopener noreferrer"
              data-testid="link-open"
            >
              <Button
                variant="outline"
                className="w-full h-12 rounded-xl text-slate-600 font-medium mt-3"
              >
                <ExternalLink className="w-4 h-4 mr-2" />
                Open in Browser
              </Button>
            </a>
          </div>

          <div className="mt-8 pt-6 border-t border-slate-100">
            <h2 className="text-sm font-semibold text-slate-700 mb-4">How to use</h2>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">1</div>
                <p className="text-sm text-slate-600">Download the HTML file above</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">2</div>
                <p className="text-sm text-slate-600">Open it in a web browser on the same network as your speakers</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">3</div>
                <p className="text-sm text-slate-600">Enter your speaker's IP address, username, and password</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">4</div>
                <p className="text-sm text-slate-600">Adjust volume using the slider, presets, or mute button</p>
              </div>
            </div>
          </div>

          <div className="mt-6 flex items-center justify-center gap-6 text-slate-400">
            <div className="flex items-center gap-1.5 text-xs">
              <Monitor className="w-4 h-4" />
              <span>Desktop</span>
            </div>
            <div className="flex items-center gap-1.5 text-xs">
              <Tablet className="w-4 h-4" />
              <span>Tablet</span>
            </div>
            <div className="flex items-center gap-1.5 text-xs">
              <Globe className="w-4 h-4" />
              <span>Any Browser</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
