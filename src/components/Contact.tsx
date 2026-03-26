import { useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { z } from "zod";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/supabase"; // 🔥 ADDED

const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Invalid email"),
  phone: z.string().trim().max(20).optional(),
  message: z.string().trim().min(1, "Message is required").max(2000),
});

type FormData = z.infer<typeof contactSchema>;

const Contact = () => {
  const { toast } = useToast();
  const [form, setForm] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState<
    Partial<Record<keyof FormData, string>>
  >({});

  // 🔥 UPDATED FUNCTION
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const result = contactSchema.safeParse(form);

    if (!result.success) {
      const fieldErrors: typeof errors = {};
      result.error.issues.forEach((i) => {
        const key = i.path[0] as keyof FormData;
        fieldErrors[key] = i.message;
      });
      setErrors(fieldErrors);
      return;
    }

    setErrors({});

    // 🚀 SEND DATA TO SUPABASE
    const { error } = await supabase.from("contacts").insert([
      {
        name: form.name,
        email: form.email,
        phone: form.phone,
        message: form.message,
      },
    ]);

    if (error) {
      toast({
        title: "Error ❌",
        description: error.message,
      });
      return;
    }

    toast({
      title: "Message sent 🚀",
      description: "Saved to database successfully!",
    });

    setForm({ name: "", email: "", phone: "", message: "" });
  };

  const update = (field: keyof FormData, value: string) => {
    setForm((p) => ({ ...p, [field]: value }));
    if (errors[field]) setErrors((p) => ({ ...p, [field]: undefined }));
  };

  return (
    <section id="contact" className="py-24">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-sm font-semibold gradient-text uppercase tracking-wider mb-3">
            Contact
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
            Let's Work Together
          </h2>
          <p className="text-muted-foreground">
            Have a project in mind? Drop us a message and we'll get back to you
            within 24 hours.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-10">
          {/* Form */}
          <form onSubmit={handleSubmit} className="lg:col-span-3 space-y-5">
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label className="text-sm font-medium mb-1.5 block">
                  Name *
                </label>
                <input
                  value={form.name}
                  onChange={(e) => update("name", e.target.value)}
                  className="w-full rounded-lg border border-input bg-card px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                  placeholder="cyphernest"
                />
                {errors.name && (
                  <p className="text-xs text-destructive mt-1">
                    {errors.name}
                  </p>
                )}
              </div>

              <div>
                <label className="text-sm font-medium mb-1.5 block">
                  Email *
                </label>
                <input
                  type="email"
                  value={form.email}
                  onChange={(e) => update("email", e.target.value)}
                  className="w-full rounded-lg border border-input bg-card px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                  placeholder="cyphernestcorporations@gmail.com"
                />
                {errors.email && (
                  <p className="text-xs text-destructive mt-1">
                    {errors.email}
                  </p>
                )}
              </div>
            </div>

            <div>
              <label className="text-sm font-medium mb-1.5 block">
                Phone
              </label>
              <input
                value={form.phone}
                onChange={(e) => update("phone", e.target.value)}
                className="w-full rounded-lg border border-input bg-card px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                placeholder="+91 1234567890"
              />
            </div>

            <div>
              <label className="text-sm font-medium mb-1.5 block">
                Message *
              </label>
              <textarea
                rows={5}
                value={form.message}
                onChange={(e) => update("message", e.target.value)}
                className="w-full rounded-lg border border-input bg-card px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-ring resize-none"
                placeholder="Tell us about your project..."
              />
              {errors.message && (
                <p className="text-xs text-destructive mt-1">
                  {errors.message}
                </p>
              )}
            </div>

            <button
              type="submit"
              className="gradient-bg text-primary-foreground px-7 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity inline-flex items-center gap-2"
            >
              Send Message
              <Send size={16} />
            </button>
          </form>

          {/* Info + Map */}
          <div className="lg:col-span-2 space-y-6">
            <div className="space-y-5">
              {[
                { icon: Phone, label: "+91 6395832962 , +91 6397031644" },
                { icon: Mail, label: "cyphernestcorporations@gmail.com" },
                { icon: MapPin, label: "kashipur, India" },
              ].map((item) => (
                <div key={item.label} className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg gradient-bg flex items-center justify-center shrink-0">
                    <item.icon
                      size={18}
                      className="text-primary-foreground"
                    />
                  </div>
                  <p className="text-sm text-muted-foreground pt-2">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>

            {/* Map */}
            <div className="rounded-xl overflow-hidden border border-border h-52">
              <iframe
                title="Office Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27859.06221033953!2d78.93632329260942!3d29.212293522569407!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390a43c0c5694dd1%3A0xe193d5f15c9333a0!2sKashipur%2C%20Uttarakhand%20244713!5e0!3m2!1sen!2sin!4v1774563354679!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;