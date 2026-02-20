import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { DollarSign, Users, CreditCard, Activity, Calendar as CalendarIcon, Download } from "lucide-react"

export default function AdminDashboard() {
    return (
        <div className="space-y-8 pb-10">
            {/* Header Section */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900">Dashboard</h2>
                <div className="flex items-center gap-2">
                    <button className="flex items-center gap-2 bg-white px-4 py-2 border border-gray-200 rounded-md text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 transition-colors">
                        <CalendarIcon className="w-4 h-4 text-gray-500" />
                        Jan 20, 2023 - Feb 09, 2023
                    </button>
                    <button className="flex items-center gap-2 bg-gray-900 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-black transition-colors shadow-sm">
                        Download
                    </button>
                </div>
            </div>

            {/* Tabs */}
            <div className="flex items-center gap-6 border-b border-gray-200 pb-px">
                <button className="text-sm font-bold border-b-2 border-gray-900 pb-2 text-gray-900">Overview</button>
                <button className="text-sm font-medium text-gray-500 hover:text-gray-900 pb-2 transition-colors">Analytics</button>
                <button className="text-sm font-medium text-gray-500 hover:text-gray-900 pb-2 transition-colors">Reports</button>
                <button className="text-sm font-medium text-gray-500 hover:text-gray-900 pb-2 transition-colors">Notifications</button>
            </div>

            {/* Stats Cards */}
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                {[
                    { title: "Total Revenue", icon: <DollarSign className="h-4 w-4 text-gray-500" />, value: "$45,231.89", desc: "+20.1% from last month" },
                    { title: "Orders", icon: <Users className="h-4 w-4 text-gray-500" />, value: "+2350", desc: "+180.1% from last month" },
                    { title: "Products", icon: <CreditCard className="h-4 w-4 text-gray-500" />, value: "+12,234", desc: "+19% from last month" },
                    { title: "Active Now", icon: <Activity className="h-4 w-4 text-gray-500" />, value: "+573", desc: "+201 since last hour" }
                ].map((stat, i) => (
                    <div key={i} className="bg-white p-6 rounded-xl border border-gray-100 shadow-[0_2px_10px_rgba(0,0,0,0.02)] flex flex-col justify-between h-[120px]">
                        <div className="flex items-center justify-between">
                            <h3 className="text-sm font-medium text-gray-600">{stat.title}</h3>
                            {stat.icon}
                        </div>
                        <div>
                            <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                            <p className="text-xs text-gray-500 font-medium mt-1">{stat.desc}</p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Main Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-7 gap-6">

                {/* Chart Section */}
                <div className="lg:col-span-4 border border-gray-100 bg-white rounded-xl shadow-[0_2px_10px_rgba(0,0,0,0.02)] p-6">
                    <h3 className="text-lg font-bold text-gray-900">Overview</h3>
                    <div className="h-[300px] w-full mt-6 flex items-end justify-between px-2 gap-2 relative">
                        {/* Mock Y-axis */}
                        <div className="absolute left-0 top-0 bottom-6 flex flex-col justify-between text-[10px] font-medium text-gray-400">
                            <span>$6,000</span>
                            <span>$4,500</span>
                            <span>$3,000</span>
                            <span>$1,500</span>
                            <span>$0</span>
                        </div>
                        {/* Mock Bars */}
                        {["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"].map((month, i) => {
                            const heights = [35, 60, 45, 80, 55, 75, 65, 95, 85, 45, 70, 80];
                            return (
                                <div key={i} className="flex flex-col items-center gap-3 w-full ml-8">
                                    <div
                                        className="w-full max-w-[30px] bg-gray-900 rounded-sm"
                                        style={{ height: `${heights[i]}%` }}
                                    ></div>
                                    <span className="text-[11px] font-medium text-gray-500">{month}</span>
                                </div>
                            )
                        })}
                    </div>
                </div>

                {/* Recent Sales Section */}
                <div className="lg:col-span-3 border border-gray-100 bg-white rounded-xl shadow-[0_2px_10px_rgba(0,0,0,0.02)] p-6">
                    <div>
                        <h3 className="text-lg font-bold text-gray-900">Recent Sales</h3>
                        <p className="text-sm text-gray-500 font-medium mt-1">You made 265 sales this month.</p>
                    </div>

                    <div className="mt-8 space-y-6">
                        {[
                            { name: "Olivia Martin", email: "olivia.martin@email.com", amount: "+$1,999.00", img: "11" },
                            { name: "Jackson Lee", email: "jackson.lee@email.com", amount: "+$39.00", img: "12" },
                            { name: "Isabella Nguyen", email: "isabella.nguyen@email.com", amount: "+$299.00", img: "13" },
                            { name: "William Kim", email: "will.kim@email.com", amount: "+$99.00", img: "14" },
                            { name: "Sofia Davis", email: "sofia.davis@email.com", amount: "+$39.00", img: "15" },
                        ].map((sale, i) => (
                            <div key={i} className="flex items-center justify-between">
                                <div className="flex items-center gap-4">
                                    <div className="w-10 h-10 rounded-full bg-gray-100 overflow-hidden flex-shrink-0">
                                        <img src={`https://i.pravatar.cc/150?img=${sale.img}`} alt={sale.name} className="w-full h-full object-cover" />
                                    </div>
                                    <div>
                                        <p className="text-sm font-bold text-gray-900">{sale.name}</p>
                                        <p className="text-sm text-gray-500">{sale.email}</p>
                                    </div>
                                </div>
                                <div className="text-sm font-bold text-gray-900">
                                    {sale.amount}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </div>
    )
}
