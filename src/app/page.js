import Image from 'next/image';
import Flyer from '../../public/flyer.png';
import PresidentIMG from '../../public/President.png';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-100">
      {/* Header */}
      <header className="bg-white dark:bg-gray-800 shadow-md">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <h1 className="text-3xl font-extrabold">The Suttoneers</h1>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-10 space-y-20">
        <section id="home" className="flex flex-col-reverse lg:flex-row items-center gap-10">
          <div className="lg:w-1/2 space-y-6">
            <h2 className="text-4xl font-bold">Real People. Real Problems. Real Solutions.</h2>
            <p>Join the Suttoneers in creating change that makes sense for everyone. From world peace to college affordability, we're here for you.</p>
            <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg shadow">
              Get Involved
            </button>
          </div>
          <div className="lg:w-1/2">
            <Image
              src={PresidentIMG}
              alt="Presidential Candidate Cole Sutton"
              width={500}   // adjust as needed
              height={500}  // adjust as needed
              className="rounded-lg shadow-lg object-cover"
              priority
            />
          </div>
        </section>

        {/* Issues Section */}
        <section id="issues" className="space-y-8">
          <h3 className="text-2xl font-bold">Our Key Issues</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: 'World Peace', desc: 'Promote stability through strategic interventions and diplomacy.' },
              { title: 'Economy', desc: 'Boost economic growth via responsible resource management.' },
              { title: 'College Affordability', desc: 'Make higher education accessible for all without burdening debt.' },
            ].map((issue) => (
              <div key={issue.title} className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md">
                <h4 className="text-xl font-semibold mb-2">{issue.title}</h4>
                <p>{issue.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Lobbying Section */}
        <section id="lobbying" className="space-y-6">
          <h3 className="text-2xl font-bold">Proposed Legislation</h3>
          <ul className="list-disc list-inside space-y-2">
            <li><strong>AUMF Expansion:</strong> Support increased stability and economic growth.</li>
            <li><strong>American Energy Independence Act:</strong> Backed to fund free college initiatives.</li>
            <li><strong>College for All Act:</strong> Champion to eliminate tuition barriers.</li>
          </ul>
        </section>

        <section id="media" className="space-y-4 text-center">
          <h3 className="text-2xl font-bold">Media Campaign</h3>
          <p>Download our campaign flyer by clicking on the image:</p>
          <a
            href={Flyer.src}
            download
            className="inline-block overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow"
          >
            <Image
              src={Flyer}
              alt="Suttoneers Campaign Flyer"
              width={600}
              height={400}
              className="object-cover"
              priority
            />
          </a>
        </section>

        {/* Speech Section */}
        <section id="speech" className="space-y-6">
          <h3 className="text-2xl font-bold">Candidate Speech</h3>
          <p>
            We are the Suttoneers and we are here to keep it real with you all.
            Real people. Real problems. Real solutions. For too long, everyday people—
            hard workers like us—have been told to settle for less. Less safety in our
            communities. Less protection for our planet. Less financial security when
            we&apos;re simply trying to afford groceries while struggling to pay off
            our student loans. We refuse to accept that.
          </p>
          <p>
            Safety in our community is a fundamental right—whether that&apos;s making
            sure our neighborhoods are secure or that laws work for the people, not
            against them. We believe in real action that protects our lives.
          </p>
          <p>
            Our environment matters, too. Climate change isn&apos;t waiting, and
            neither should we. We are committed to policies that safeguard the air we
            breathe, the water we drink, and the future we&apos;re building. Living a
            sustainable lifestyle for us and future generations is a key
            responsibility.
          </p>
          <p>
            And let’s not forget about the economy. No one should have to make the
            impossible choice between feeding their family and paying off the debt
            that got them their education. The system should work for us, not
            against us. We need sustainable economic policies that actually make
            sense—ones that will help grow our communities together.
          </p>
          <p>
            The Suttoneers are about solutions that work. No empty promises. No out‑of‑touch
            policies. Just real change that makes a difference in the lives of real
            people. So, to everyone here today, this campaign is for you, because of
            you. Let’s stand together, fight for what’s right, and build a future
            that makes sense. Let’s get to work! Thank you!
          </p>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-white dark:bg-gray-800 shadow-inner">
        <div className="max-w-7xl mx-auto px-6 py-4 text-center text-sm">
          &copy; {new Date().getFullYear()} The Suttoneers. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
