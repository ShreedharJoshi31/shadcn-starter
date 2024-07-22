import { Sheet, SheetTrigger, SheetContent } from "./components/ui/sheet";
import { Button } from "./components/ui/button";
import { Input } from "./components/ui/input";
import { Avatar, AvatarImage, AvatarFallback } from "./components/ui/avatar";
import { Label } from "./components/ui/label";
import { Select } from "./components/ui/select";
import { Textarea } from "./components/ui/textarea";

export default function Component() {
  return (
    <div className="flex min-h-screen w-full bg-muted/40">
      <aside className="flex inset-y-0 left-0 z-10 w-64 flex-col border-r bg-background">
        <div className="flex h-[60px] items-center border-b px-6">
          <a href="#" className="flex items-center gap-2 font-semibold">
            <BotIcon className="h-6 w-6" />
            <span>Apna bot</span>
          </a>
        </div>
        <nav className="flex flex-1 flex-col gap-2 overflow-auto py-4 px-4">
          <a
            href="#"
            className="flex items-center gap-3 rounded-lg bg-primary px-3 py-2 text-primary-foreground"
          >
            <PlusIcon className="h-4 w-4" />
            New Chat
          </a>
          <a
            href="#"
            className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
          >
            <StarIcon className="h-4 w-4" />
            Starred Chats
          </a>
          <a
            href="#"
            className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
          >
            <ClockIcon className="h-4 w-4" />
            History
          </a>
          <a
            href="#"
            className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
          >
            <SettingsIcon className="h-4 w-4" />
            Settings
          </a>
        </nav>
      </aside>

      <div className="flex flex-1 flex-col items-center justify-between">
        <main className="flex flex-1 flex-col justify-between w-full max-w-4xl">
          <div className="flex-1 overflow-auto p-4 sm:p-6 w-full">
            <div className="grid gap-4">
              <div className="flex items-start gap-4">
                <Avatar className="h-10 w-10 shrink-0">
                  <AvatarImage src="/placeholder-user.jpg" />
                  <AvatarFallback>AB</AvatarFallback>
                </Avatar>
                <div className="grid gap-1 rounded-lg bg-muted p-3 text-sm">
                  <div className="flex items-center gap-2">
                    <div className="font-medium">Apna Bot</div>
                    <div className="text-xs text-muted-foreground">2:39 PM</div>
                  </div>
                  <div>
                    <p>Hello, how can I assist you today?</p>
                  </div>
                </div>
              </div>
              <div className="flex items-start gap-4 justify-end">
                <div className="grid gap-1 rounded-lg bg-primary p-3 text-sm text-primary-foreground">
                  <div className="flex items-center gap-2">
                    <div className="font-medium">You</div>
                    <div className="text-xs text-primary-foreground/80">
                      2:40 PM
                    </div>
                  </div>
                  <div>
                    <p>Hi, I have a question about your product.</p>
                  </div>
                </div>
                <Avatar className="h-10 w-10 shrink-0">
                  <AvatarImage src="/placeholder-user.jpg" />
                  <AvatarFallback>UU</AvatarFallback>
                </Avatar>
              </div>
              <div className="flex items-start gap-4">
                <Avatar className="h-10 w-10 shrink-0">
                  <AvatarImage src="/placeholder-user.jpg" />
                  <AvatarFallback>AB</AvatarFallback>
                </Avatar>
                <div className="grid gap-1 rounded-lg bg-muted p-3 text-sm">
                  <div className="flex items-center gap-2">
                    <div className="font-medium">Apna bot</div>
                    <div className="text-xs text-muted-foreground">2:41 PM</div>
                  </div>
                  <div>
                    <p>Sure, how can I help you with that?</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="sticky bottom-0 z-10 flex h-16 items-center gap-2 border-t bg-background rounded-lg px-4 sm:px-6 w-full">
            <Input
              type="text"
              placeholder="Type your message..."
              className="flex-1 rounded-lg bg-muted px-4 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-primary"
            />
            <Button variant="ghost" size="icon">
              <PaperclipIcon className="h-5 w-5" />
              <span className="sr-only">Attach file</span>
            </Button>
            <Button className="h-10 px-4 text-sm">
              <SendIcon className="h-5 w-5" />
            </Button>
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <SettingsIcon className="h-5 w-5" />
                  <span className="sr-only">Chatbot settings</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="sm:max-w-xs">
                <div className="flex flex-col gap-4 p-4">
                  <h3 className="text-lg font-medium">Chatbot Settings</h3>
                  <Label>Kuch toh</Label>
                  <Textarea />
                  <Label>Kuch toh</Label>
                  <Textarea />
                  <Label>Kuch toh</Label>
                  <Textarea />
                  <Label>Kuch toh</Label>
                  <Textarea />
                  <Button className="w-full">Save Settings</Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </main>
      </div>
    </div>
  );
}

function BotIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 8V4H8" />
      <rect width="16" height="12" x="4" y="8" rx="2" />
      <path d="M2 14h2" />
      <path d="M20 14h2" />
      <path d="M15 13v2" />
      <path d="M9 13v2" />
    </svg>
  );
}

function ClockIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}

function MenuIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  );
}

function PaperclipIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l8.57-8.57A4 4 0 1 1 18 8.84l-8.59 8.57a2 2 0 0 1-2.83-2.83l8.49-8.48" />
    </svg>
  );
}

function PlusIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14" />
      <path d="M12 5v14" />
    </svg>
  );
}

function SettingsIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}

function SendIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m22 2-7 20-4-9-9-4Z" />
      <path d="M22 2 11 13" />
    </svg>
  );
}

function StarIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
}

function XIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  );
}
