// import imgEllipse20 from "figma:asset/6d486345e6fa4fd46baf1349aeddc65246bbbfdb.png";
// import imgFrame1171279142 from "figma:asset/4aa51a52010dbc0dc538cd892567c4272b3651ab.png";
// import imgFrame1171279144 from "figma:asset/f76cc297314911f575e608bcd39f5ef610e12c5e.png";
// import imgEllipse21 from "figma:asset/83d364ff8ef4da1956cc5bf38003203dac055b2a.png";
// import imgFrame1171279145 from "figma:asset/7c6dd7e25e36bce8c04ab4431f05999605f3d1e9.png";
// import imgEllipse22 from "figma:asset/af447c008c9c77523fab1d2d81df49972f41e512.png";

"use client";


const imgEllipse20 = "/assets/pages/blogs/user.png";
const imgFrame1171279142 = "/assets/pages/blogs/banner.png";
const imgFrame1171279144 = "/assets/pages/blogs/banner.png";
const imgEllipse21 = "/assets/pages/blogs/user.png";
const imgFrame1171279145 = "/assets/pages/blogs/banner.png";
const imgEllipse22 = "/assets/pages/blogs/user.png";


function IconoirArrowDown() {
    return (
        <div
            className="relative size-[18px]"
            data-name="iconoir:arrow-down"
        >
            <svg
                className="block size-full"
                fill="none"
                preserveAspectRatio="none"
                viewBox="0 0 18 18"
            >
                <g id="iconoir:arrow-down">
                    <path
                        d="M9 2.25V15.75M9 15.75L15.375 9.375M9 15.75L2.625 9.375"
                        id="Vector"
                        stroke="var(--stroke-0, #4F4F4F)"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.35"
                    />
                </g>
            </svg>
        </div>
    );
}

function Frame30() {
    return (
        <div className="content-stretch flex gap-[12px] items-start relative shrink-0">
            <div
                className="flex items-center justify-center relative shrink-0 size-[18px]"
                style={
                    {
                        "--transform-inner-width": "1184.796875",
                        "--transform-inner-height": "154",
                    } as React.CSSProperties
                }
            >
                <div className="-rotate-90 -scale-y-100 flex-none">
                    <IconoirArrowDown />
                </div>
            </div>
            <p className="font-['Gilroy:Medium',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#4f4f4f] text-[16px]">
                Back to Blogs
            </p>
        </div>
    );
}

function Frame22() {
    return (
        <div className="content-stretch flex gap-[6px] items-center relative shrink-0">
            <p className="font-['Gilroy:Medium',sans-serif] leading-[20px] not-italic overflow-hidden relative shrink-0 text-[#282828] text-[15px] text-ellipsis">
                by
            </p>
            <div className="relative shrink-0 size-[20px]">
                <img
                    alt=""
                    className="block max-w-none size-full"
                    height="20"
                    src={imgEllipse20}
                    width="20"
                />
            </div>
            <p className="font-['Gilroy:Medium',sans-serif] leading-[20px] not-italic overflow-hidden relative shrink-0 text-[#282828] text-[15px] text-ellipsis">
                Jane Cooper
            </p>
        </div>
    );
}

function Frame24() {
    return (
        <div className="content-stretch flex gap-[16px] items-center relative shrink-0">
            <p className="font-['Gilroy:Semibold',sans-serif] leading-[20px] not-italic overflow-hidden relative shrink-0 text-[#0098d4] text-[15px] text-ellipsis">
                14 Jan 2025
            </p>
            <div
                className="flex h-[14px] items-center justify-center relative shrink-0 w-0"
                style={
                    {
                        "--transform-inner-width": "1184.796875",
                        "--transform-inner-height": "154",
                    } as React.CSSProperties
                }
            >
                <div className="flex-none rotate-90">
                    <div className="h-0 relative w-[14px]">
                        <div className="absolute inset-[-1px_0_0_0]">
                            <svg
                                className="block size-full"
                                fill="none"
                                preserveAspectRatio="none"
                                viewBox="0 0 14 1"
                            >
                                <line
                                    id="Line 35"
                                    stroke="var(--stroke-0, #BBBBBB)"
                                    strokeLinecap="round"
                                    x1="0.5"
                                    x2="13.5"
                                    y1="0.5"
                                    y2="0.5"
                                />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
            <Frame22 />
        </div>
    );
}

function Frame19() {
    return (
        <div className="h-[520px] relative rounded-[12px] shrink-0 w-full">
            <img
                alt=""
                className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[12px] size-full"
                src={imgFrame1171279142}
            />
        </div>
    );
}

function Frame34() {
    return (
        <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full">
            <Frame24 />
            <p className="font-['Gilroy:Semibold',sans-serif] leading-[44px] min-w-full not-italic relative shrink-0 text-[#282828] text-[38px] w-[min-content] whitespace-pre-wrap">
                How IIoT Is Redefining Smart Factories in 2026
            </p>
            <p className="font-['Gilroy:Regular',sans-serif] leading-[24px] min-w-full not-italic relative shrink-0 text-[#777] text-[16px] w-[min-content] whitespace-pre-wrap">
                Manufacturing floors used to run on experience, gut
                feeling, and end-of-day reports. That era is politely
                being escorted out. In 2026, smart factories run on
                Industrial Internet of Things (IIoT) where machines
                talk, data flows in real time, and decisions happen
                before problems turn expensive.
            </p>
            <Frame19 />
        </div>
    );
}

function Frame32() {
    return (
        <div className="content-stretch flex flex-col gap-[12px] items-start not-italic relative shrink-0 w-[896px]">
            <p className="font-['Gilroy:Medium',sans-serif] leading-[26px] relative shrink-0 text-[#4f4f4f] text-[20px]">
                What IIoT Actually Means in a Modern Factory
            </p>
            <p className="font-['Gilroy:Regular',sans-serif] leading-[25px] min-w-full relative shrink-0 text-[#777] text-[16px] text-justify w-[min-content] whitespace-pre-wrap">
                Manufacturing floors used to run on experience, gut
                feeling, and end-of-day reports. That era is politely
                being escorted out. In 2026, smart factories run on
                Industrial Internet of Things (IIoT) where machines
                talk, data flows in real time, and decisions happen
                before problems turn expensive.
            </p>
        </div>
    );
}

function Frame33() {
    return (
        <div className="content-stretch flex flex-col gap-[12px] items-start not-italic relative shrink-0 w-[896px]">
            <p className="font-['Gilroy:Medium',sans-serif] leading-[26px] relative shrink-0 text-[#4f4f4f] text-[20px]">
                From Isolated Machines to Connected Systems
            </p>
            <p className="font-['Gilroy:Regular',sans-serif] leading-[25px] min-w-full relative shrink-0 text-[#777] text-[16px] text-justify w-[min-content] whitespace-pre-wrap">
                Industrial IoT is no longer an experimental upgrade but
                the foundation of how smart factories operate in 2026,
                transforming traditional plants into connected,
                data-driven environments where machines, systems, and
                people continuously exchange information in real time.
                By embedding sensors across equipment and integrating
                production systems, IIoT enables factories to move
                beyond isolated machine operations and delayed reporting
                toward live visibility of asset health, production
                performance, energy usage, and quality metrics. This
                constant stream of data allows teams to detect anomalies
                early, predict equipment failures before they cause
                downtime, optimize throughput by identifying bottlenecks
                as they form, and maintain consistent quality through
                real-time statistical process control. Unlike legacy
                setups that rely on manual checks and historical data,
                IIoT platforms empower faster decision-making, proactive
                maintenance, and smarter resource utilization, helping
                manufacturers reduce operational costs while increasing
                efficiency and resilience. As cost pressures rise,
                skilled labor becomes scarce, and demand for flexible
                production grows, IIoT bridges the gap by turning raw
                operational data into actionable intelligence, enabling
                factories to adapt quickly, scale confidently, and stay
                competitive in an increasingly connected industrial
                landscape.
            </p>
        </div>
    );
}

function Frame20() {
    return (
        <div className="h-[160px] relative rounded-[8px] shrink-0 w-full">
            <img
                alt=""
                className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[8px] size-full"
                src={imgFrame1171279144}
            />
        </div>
    );
}

function Frame25() {
    return (
        <div className="content-stretch flex flex-col gap-[8px] items-start not-italic relative shrink-0 w-full whitespace-pre-wrap">
            <p className="font-['Gilroy:Semibold',sans-serif] leading-[26px] relative shrink-0 text-[#282828] text-[20px] w-full">
                Digital Twins: The Secret Weapon for Predictive
                Maintenance
            </p>
            <p className="font-['Gilroy:Regular',sans-serif] leading-[20px] overflow-hidden relative shrink-0 text-[#777] text-[14px] text-ellipsis w-full">
                Discuss how AI analytics can provide real-time insights
                from operational data, enhancing decision-making and
                operational efficiency.
            </p>
        </div>
    );
}

function Frame23() {
    return (
        <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
            <div className="relative shrink-0 size-[20px]">
                <img
                    alt=""
                    className="block max-w-none size-full"
                    height="20"
                    src={imgEllipse21}
                    width="20"
                />
            </div>
            <p className="font-['Gilroy:Medium',sans-serif] leading-[20px] not-italic overflow-hidden relative shrink-0 text-[#282828] text-[15px] text-ellipsis">
                John Doe
            </p>
        </div>
    );
}

function Frame26() {
    return (
        <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
            <Frame23 />
            <p className="font-['Gilroy:Medium',sans-serif] leading-[20px] not-italic overflow-hidden relative shrink-0 text-[#0098d4] text-[15px] text-ellipsis">
                7 mins read
            </p>
        </div>
    );
}

function Frame35() {
    return (
        <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
            <Frame20 />
            <Frame25 />
            <Frame26 />
        </div>
    );
}

function Frame21() {
    return (
        <div className="h-[160px] relative rounded-[12px] shrink-0 w-full">
            <img
                alt=""
                className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[12px] size-full"
                src={imgFrame1171279145}
            />
        </div>
    );
}

function Frame27() {
    return (
        <div className="content-stretch flex flex-col gap-[8px] items-start not-italic relative shrink-0 w-full whitespace-pre-wrap">
            <p className="font-['Gilroy:Semibold',sans-serif] leading-[26px] relative shrink-0 text-[#282828] text-[20px] w-full">
                Why Real-Time Data Beats Old School Dashboards
            </p>
            <p className="font-['Gilroy:Regular',sans-serif] leading-[20px] overflow-hidden relative shrink-0 text-[#777] text-[14px] text-ellipsis w-full">
                Outline the benefits of IoT integration in industries,
                focusing on improved communication between devices and
                enhanced operational visibility.
            </p>
        </div>
    );
}

function Frame29() {
    return (
        <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
            <div className="relative shrink-0 size-[20px]">
                <img
                    alt=""
                    className="block max-w-none size-full"
                    height="20"
                    src={imgEllipse22}
                    width="20"
                />
            </div>
            <p className="font-['Gilroy:Medium',sans-serif] leading-[20px] not-italic overflow-hidden relative shrink-0 text-[#282828] text-[15px] text-ellipsis">
                Emily Smith
            </p>
        </div>
    );
}

function Frame28() {
    return (
        <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
            <Frame29 />
            <p className="font-['Gilroy:Medium',sans-serif] leading-[20px] not-italic overflow-hidden relative shrink-0 text-[#0098d4] text-[15px] text-ellipsis">
                6 mins read
            </p>
        </div>
    );
}

function Frame37() {
    return (
        <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
            <Frame21 />
            <Frame27 />
            <Frame28 />
        </div>
    );
}

function Frame36() {
    return (
        <div className="absolute content-stretch flex flex-col gap-[28px] items-start right-0 top-[728px] w-[366px]">
            <p className="font-['Gilroy:Semibold',sans-serif] leading-[26px] not-italic relative shrink-0 text-[#282828] text-[24px]">
                Recent Blogs
            </p>
            <div className="h-0 relative shrink-0 w-full">
                <div className="absolute inset-[-0.75px_0_0_0]">
                    <svg
                        className="block size-full"
                        fill="none"
                        preserveAspectRatio="none"
                        viewBox="0 0 366 0.75"
                    >
                        <line
                            id="Line 32"
                            stroke="var(--stroke-0, #D2D2D2)"
                            strokeWidth="0.75"
                            x2="366"
                            y1="0.375"
                            y2="0.375"
                        />
                    </svg>
                </div>
            </div>
            <Frame35 />
            <div className="h-0 relative shrink-0 w-full">
                <div className="absolute inset-[-0.75px_0_0_0]">
                    <svg
                        className="block size-full"
                        fill="none"
                        preserveAspectRatio="none"
                        viewBox="0 0 366 0.75"
                    >
                        <line
                            id="Line 32"
                            stroke="var(--stroke-0, #D2D2D2)"
                            strokeWidth="0.75"
                            x2="366"
                            y1="0.375"
                            y2="0.375"
                        />
                    </svg>
                </div>
            </div>
            <Frame37 />
        </div>
    );
}

function Frame31() {
    return (
        <div className="content-stretch flex flex-col gap-[36px] items-start relative shrink-0 w-full">
            <Frame34 />
            <Frame32 />
            <Frame33 />
            <p className="font-['Gilroy:Regular',sans-serif] leading-[25px] not-italic relative shrink-0 text-[#777] text-[16px] text-justify w-[896px] whitespace-pre-wrap">
                Industrial IoT has evolved into the nervous system of
                smart factories in 2026, fundamentally changing how
                manufacturing environments function by connecting
                machines, sensors, software platforms, and human
                decision-makers into a continuously communicating
                ecosystem. Instead of operating as isolated units that
                report issues after the fact, equipment now generates
                real-time operational data covering performance,
                condition, energy consumption, quality metrics, and
                environmental factors, creating a live digital view of
                the entire plant. This uninterrupted data flow allows
                manufacturers to shift from reactive problem-solving to
                proactive optimization, where potential failures are
                identified through predictive analytics before they
                cause downtime, production schedules adjust dynamically
                in response to bottlenecks, and quality deviations are
                corrected instantly rather than after costly rework.
                IIoT also plays a critical role in improving energy
                efficiency and sustainability by exposing inefficiencies
                that were previously invisible, enabling data-driven
                decisions that reduce waste without sacrificing output.
                As modern IIoT platforms integrate advanced analytics,
                artificial intelligence, and digital twin models,
                factories gain the ability not only to understand what
                is happening on the shop floor but to simulate outcomes,
                test scenarios, and choose the best course of action
                before changes are applied in the real world. This
                intelligence becomes especially critical as
                manufacturers face rising operational costs, tighter
                margins, and ongoing workforce shortages, making
                automation and insight-driven decision-making essential
                rather than optional. In this environment, IIoT acts as
                a force multiplier, amplifying human expertise,
                improving cross-team collaboration, and creating systems
                that learn and improve over time. The result is a
                manufacturing operation that is more resilient,
                scalable, and responsive to market demands, where data
                is no longer just collected but actively used to drive
                efficiency, reliability, and long-term competitiveness
                in an increasingly digital industrial landscape.
            </p>
            <Frame36 />
            <p className="font-['Gilroy:Regular',sans-serif] leading-[25px] not-italic relative shrink-0 text-[#777] text-[16px] text-justify w-[896px] whitespace-pre-wrap">
                This constant stream of data allows teams to detect
                anomalies early, predict equipment failures before they
                cause downtime, optimize throughput by identifying
                bottlenecks as they form, and maintain consistent
                quality through real-time statistical process control.
                Unlike legacy setups that rely on manual checks and
                historical data, IIoT platforms empower faster
                decision-making, proactive maintenance, and smarter
                resource utilization, helping manufacturers reduce
                operational costs while increasing efficiency and
                resilience. As cost pressures rise, skilled labor
                becomes scarce, and demand for flexible production
                grows, IIoT bridges the gap by turning raw operational
                data into actionable intelligence, enabling factories to
                adapt quickly, scale confidently, and stay competitive
                in an increasingly connected industrial landscape.
            </p>
        </div>
    );
}

export const BlogDetailsContent = (props: any) => {
    return (
        <div
            className="bg-white relative shrink-0 w-full"
            data-name="Blog details"
        >
            <div className="overflow-clip rounded-[inherit] size-full">
                <div className="content-stretch flex flex-col gap-[36px] items-start pb-[60px] pt-[60px] px-[100px] relative w-full">
                    <Frame30 />
                    <Frame31 />
                </div>
            </div>
        </div>
    );
}

export default BlogDetailsContent;