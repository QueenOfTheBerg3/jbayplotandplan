// Contains a list of tabs and can switch between them

const TabContainer = ({
    tabList,
    currentTab,
}: {
    tabList: React.ReactNodeArray;
    currentTab: number;
}) => {
    return (
        <>
            {tabList.map((tab: React.ReactNode, idex) => {
                return (
                    <section
                        key={idex}
                        className={`${idex === currentTab ? '' : 'hidden'}`}
                    >
                        {tab}
                    </section>
                );
            })}
        </>
    );
};

const Tab = ({ children }: { children: React.ReactNode }) => (
    <div>{children}</div>
);

Tab.Container = TabContainer;

export default Tab;
