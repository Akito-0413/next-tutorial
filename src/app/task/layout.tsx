const TaskLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className="bg-blue-300">
      <div>タスクレイアウト</div>
      {children}
    </div>
  );
};

export default TaskLayout;
