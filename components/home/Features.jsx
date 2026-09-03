import {
  MessageCircle,
  Users,
  ShieldCheck,
  Zap,
} from "lucide-react";

export default function Features() {
  return (
    <section className="border-y bg-white px-4 py-16 sm:px-6 md:py-20">

      <div className="mx-auto max-w-6xl">

        {/* Section Heading */}
        <div className="mx-auto max-w-2xl text-center">

          <p className="text-sm font-semibold text-blue-500">
            WHY NEXTTALK
          </p>

          <h2 className="mt-2 text-3xl font-bold text-gray-900 sm:text-4xl">
            Everything you need to stay connected
          </h2>

          <p className="mt-4 text-sm leading-6 text-gray-500 sm:text-base">
            NextTalk provides a simple and modern way to communicate
            with the people who matter to you.
          </p>

        </div>


        {/* Feature Cards */}
        <div className="mt-10 grid gap-5 sm:grid-cols-2 md:grid-cols-4">

          {/* Real-Time Chat */}
          <div className="rounded-2xl bg-gray-50 p-6 text-center shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">

            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-500">
              <MessageCircle size={24} />
            </div>

            <h3 className="mt-4 font-semibold text-gray-900">
              Real-Time Chat
            </h3>

            <p className="mt-2 text-sm leading-6 text-gray-500">
              Send and receive messages instantly through real-time
              conversations.
            </p>

          </div>


          {/* Connect With People */}
          <div className="rounded-2xl bg-gray-50 p-6 text-center shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">

            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-500">
              <Users size={24} />
            </div>

            <h3 className="mt-4 font-semibold text-gray-900">
              Connect With People
            </h3>

            <p className="mt-2 text-sm leading-6 text-gray-500">
              Find and connect with people for simple and meaningful
              conversations.
            </p>

          </div>


          {/* Secure */}
          <div className="rounded-2xl bg-gray-50 p-6 text-center shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">

            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-500">
              <ShieldCheck size={24} />
            </div>

            <h3 className="mt-4 font-semibold text-gray-900">
              Secure
            </h3>

            <p className="mt-2 text-sm leading-6 text-gray-500">
              Keep your account and conversations protected with a
              secure messaging experience.
            </p>

          </div>


          {/* Fast & Simple */}
          <div className="rounded-2xl bg-gray-50 p-6 text-center shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">

            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-500">
              <Zap size={24} />
            </div>

            <h3 className="mt-4 font-semibold text-gray-900">
              Fast & Simple
            </h3>

            <p className="mt-2 text-sm leading-6 text-gray-500">
              Enjoy a clean, fast, and easy-to-use messaging
              experience.
            </p>

          </div>

        </div>

      </div>

    </section>
  );
}